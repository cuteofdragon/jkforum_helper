import { XhrResponseType, XhrMethod } from '@/commonType';
import { turnCdata } from '@/utils/tools';
import { MessageBox } from './message';

// GM_xmlhttpRequest GET异步通用模块
function getData(
  url: string,
  type: XhrResponseType = XhrResponseType.document,
  usermethod: XhrMethod = XhrMethod.GET
): Promise<Document> {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: usermethod,
      url: url,
      responseType: type,
      timeout: 5 * 60 * 1000,
      onload: function (response) {
        if (response.status >= 200 && response.status < 400) {
          resolve(response.response);
        } else {
          reject(response);
        }
      },
      onerror: function (error) {
        new MessageBox('网络错误');
        reject(error);
      },
      ontimeout: () => {
        new MessageBox('网络超时', 'none', 2);
        reject('timeout');
      },
    });
  });
}
// GM_xmlhttpRequest POST异步通用模块
function postDataCdata(
  url: string,
  postData: string,
  type: XhrResponseType = XhrResponseType.document,
  usermethod: XhrMethod = XhrMethod.POST
): Promise<Document | string> {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: usermethod,
      url: url,
      headers: {
        'Content-Type': type,
      },
      data: postData,
      responseType: type,
      timeout: 1 * 60 * 1000,
      onload: function (response) {
        if (response.status >= 200 && response.status < 400) {
          resolve(turnCdata(response.response));
        } else {
          new MessageBox('请求错误：' + response.status);
          reject(response.status);
        }
      },
      onerror: function (error) {
        new MessageBox('网络错误');
        reject(error);
      },
      ontimeout: () => {
        new MessageBox('网络超时', 'none', 2);
        reject('timeout');
      },
    });
  });
}

function postData(
  url: string,
  postData: string,
  type: XhrResponseType = XhrResponseType.form,
  usermethod: XhrMethod = XhrMethod.POST
): Promise<MonkeyXhrResponse> {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: usermethod,
      url: url,
      headers: {
        'Content-Type': type,
      },
      data: postData,
      responseType: type,
      timeout: 1 * 60 * 1000,
      onload: function (response) {
        if (response.status >= 200 && response.status < 400) {
          resolve(response);
        } else {
          new MessageBox('请求错误：' + response.status);
          reject(response.status);
        }
      },
      onerror: function (error) {
        new MessageBox('网络错误');
        reject(error);
      },
      ontimeout: () => {
        new MessageBox('网络超时', 'none', 2);
        reject('timeout');
      },
    });
  });
}

export { getData, postDataCdata, postData };
