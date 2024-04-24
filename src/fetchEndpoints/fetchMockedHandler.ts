import { http, HttpResponse } from "msw";
import { fetchBaseUrl } from "./clientBaseApi";
import { _transactions, _user, _wallet } from "./path";
import {
  TransactionMockedType,
  userDetailsMockedData,
  walletDetailsMockedData,
} from "./fetchMockedHandlerData";

/* 
Mock all fetch requests when running test
*/
const fetchApiHandler = [
  http.get(`${fetchBaseUrl}${_user}`, () => {
    return HttpResponse.json(userDetailsMockedData);
  }),
  http.get(`${fetchBaseUrl}${_wallet}`, () => {
    return HttpResponse.json(walletDetailsMockedData);
  }),
  http.get(`${fetchBaseUrl}${_transactions}`, () => {
    return HttpResponse.json(TransactionMockedType);
  }),
];

export default fetchApiHandler;
