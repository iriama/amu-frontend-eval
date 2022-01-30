import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async selectAll<T>(table: string, select?: string) {
    const { error, data } = await this.supabase.from(table).select(select || "*");
    if (error) return Promise.reject(error);

    return Promise.resolve((data || []) as T[]);
  }

  async selectCountEquals(table: string, field: string, value: any) {
    const { error, data, count } = await this.supabase.from(table).select("*", { count: "exact" }).eq(field, value);
    if (error) return Promise.reject(error);

    return Promise.resolve(count ? count : 0);
  }

  async selectAllEqual<T>(table: string, field: string, value: any) {
    const { error, data } = await this.supabase.from(table).select().eq(field, value);
    if (error) return Promise.reject(error);

    return Promise.resolve((data || []) as T[]);
  }

  async selectSingleEqual<T>(table: string, field: string, value: any) {
    const { error, data } = await this.supabase.from(table).select().eq(field, value).single();
    if (error) return Promise.reject(error);

    return Promise.resolve(data as T);
  }

  async insert<T>(table: string, item: any) {
    const { error, data } = await this.supabase.from(table).insert(item).single();
    if (error) return Promise.reject(error);

    return Promise.resolve(data as T);
  }

  async deleteEquals(table: string, field: string, value: any) {
    const { error, data } = await this.supabase.from(table).delete().eq(field, value);
    if (error) return Promise.reject(error);

    return Promise.resolve();
  }
}
