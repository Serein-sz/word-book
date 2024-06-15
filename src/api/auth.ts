import type { TokenInfo } from "@/types/commons"
import type { UserDto } from "@/types/user"
import { request } from "@/utils/request"
import SparkMD5 from "spark-md5"


export async function login(user: UserDto) {
  user.password = SparkMD5.hash(user.password)
  const { data: tokenInfo } = await request<TokenInfo>("POST", "/login", user)
  localStorage.setItem("tokenName", tokenInfo.tokenName)
  localStorage.setItem(tokenInfo.tokenName, tokenInfo.tokenValue)
  return true
}
