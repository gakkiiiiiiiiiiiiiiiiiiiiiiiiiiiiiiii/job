// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
import { UserState } from '/@/store/modules/user/types';
// import axios from 'axios';
enum URL {
  list = 'thing/list',
  create = 'thing/create',
  update = 'thing/update',
  delete = 'thing/delete',
  detail = 'thing/detail',
  listUserThing = 'thing/listUserThingApi',
}

const listApi = async (params: any) => get<any>({ url: URL.list, params: params, data: {}, headers: {} });
const createApi = async (data: any) =>
  post<any>({ url: URL.create, params: {}, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const updateApi = async (data: any) =>
  post<any>({ url: URL.update, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const deleteApi = async (params: any) => post<any>({ url: URL.delete, params: params, headers: {} });
const detailApi = async (params: any) => get<any>({ url: URL.detail, params: params, headers: {} });

const listUserThingApi = async (params: any) => get<any>({ url: URL.listUserThing, params: params, data: {}, headers: {} });

export { listApi, createApi, updateApi, deleteApi, detailApi, listUserThingApi };
