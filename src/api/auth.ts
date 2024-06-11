import type { User } from "@/types/user"
import { request } from "@/utils/request"
import SparkMD5 from "spark-md5"


export async function login(user: User) {
  user.password = SparkMD5.hash(user.password)
  return request<any>("POST", "/")
}
