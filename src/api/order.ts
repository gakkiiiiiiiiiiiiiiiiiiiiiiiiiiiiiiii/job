import { get, post } from '/@/utils/http/axios';

enum URL {
  list = 'order/list',
  create = 'order/create',
  update = 'order/update',
  delete = 'order/delete',
  cancel = 'order/cancelOrder',
  cancelUserOrder = 'order/cancelUserOrder',
  userOrderList = 'order/userOrderList',
}

const listApi = async (params: any) => get<any>({ url: URL.list, params: params, data: {}, headers: {} });
const userOrderListApi = async (params: any) => get<any>({ url: URL.userOrderList, params: params, data: {}, headers: {} });

const createApi = async (data: any) =>
  post<any>({
    url: URL.create,
    params: {},
    data: data,
    headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' },
  });
const updateApi = async (params: any, data: any) =>
  post<any>({
    url: URL.update,
    params: params,
    data: data,
    headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' },
  });
const deleteApi = async (params: any) => post<any>({ url: URL.delete, params: params, headers: {} });

const cancelApi = async (params: any) => post<any>({ url: URL.cancel, params: params, headers: {} });

const cancelUserOrderApi = async (params: any) => post<any>({ url: URL.cancelUserOrder, params: params, headers: {} });

export { listApi, userOrderListApi, createApi, updateApi, deleteApi, cancelApi, cancelUserOrderApi };
