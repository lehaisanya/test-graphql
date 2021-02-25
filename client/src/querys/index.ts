import { loader } from "graphql.macro";

export const GET_ALL_ARTICLES = loader('./getAllArticles.gql')
export const GET_ALL_USERS = loader('./getAllUsers.gql')
export const GET_ARTICLE_BY_ID = loader('./getArticleById.gql')
export const GET_USER_BY_NICKNAME = loader('./getUserByNickname.gql')
