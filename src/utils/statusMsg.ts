export interface IReadLineResult<T> {
  code: number;
  msg: string;
  time?: string;
  data?: T;
  length?: number;
}

/**
 * 成功返回格式
 * @param data
 * @param time
 * @returns
 */
export function getSuccessStatus<T extends Record<string, any>[]>(
  data: T,
  time: number,
  msg: string = 'success',
  length = 0
): IReadLineResult<T> {
  return {
    code: 200,
    msg,
    data,
    time: `${time} ms`,
    length: length || data.length,
  };
}

/**
 * 失败返回格式
 * @param msg
 * @param time
 * @returns
 */
export function getErrorStatus(
  msg: string,
  time?: number,
  code: number = 500
): IReadLineResult<never> {
  return {
    code,
    msg,
    time: `${time} ms`,
  };
}
