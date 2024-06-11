import type { Words } from "@/types/words";
import { request } from "@/utils/request";

export async function splitWord(sentence: string): Promise<Words> {
  const { data } = await request<Words>("GET", "/chat/split-word", null, { sentence })
  return data;
}
