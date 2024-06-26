import { get, post } from '/@/utils/http/axios';
import { UserState } from '/@/store/modules/user/types';

enum URL {
  userCollectList = 'thingCollect/getUserCollectList',
  collect = 'thingCollect/collect',
  unCollect = 'thingCollect/unCollect',
}

const collectApi = async (data: any) =>
  post<any>({ url: URL.collect, params: {}, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const unCollectApi = async (params: any) =>
  post<any>({ url: URL.unCollect, params: params, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const userCollectListApi = async (params: any) => get<any>({ url: URL.userCollectList, params: params });

export { collectApi, unCollectApi, userCollectListApi };
