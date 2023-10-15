import * as superagent from 'superagent';
import { Http } from '~/interfaces/Http';

const api_http = process.env.API_HTTP;

function objectToQueryString(obj: Record<string, any>): string {
    const keyValuePairs: string[] = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
  
        if (value !== undefined) {
          keyValuePairs.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
      }
    }
  
    return keyValuePairs.join('&');
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            hello: {
                /**
                 * @name Requisição_get.
                 * Faz uma requisição para a API que representa o backend da aplicação.
                 * 
                 * @param {string} url - A rota da API a ser consultada.
                 * @param {object} data - As informações a serem enviadas na requisição.
                 * @returns {object} - Um objeto contendo informações sobre a requisição:
                 *   - {boolean} valid: Um indicador de validade da requisição.
                 *   - {string} text: Uma mensagem de texto descrevendo o resultado da requisição.
                 *   - {object} data: Os dados retornados pela API (se a requisição for bem-sucedida).
                 */
                async get(url: string, data: any){
                    let response: any;

                    try {

                        response = await superagent
                        .get(`${api_http}${url}?${objectToQueryString(data)}`)
                        .set({
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Credentials': 'true',
                        })
                        .send(data || null);
                    } catch (error: any) {
                        let e = JSON.parse(error.response.text)
                        if(e as Http){
                            response = {body: e, status: error.response.statusCode};
                        }else{
                            throw new Error(error.response);
                        }
                    }

                    try{
                        response.body as Http;
                    }catch (error: any){
                        let e = JSON.parse(error.response.text)
                        if(e as Http){
                            response = {body: e, status: error.response.statusCode};
                        }else{
                            throw new Error(error.response);
                        }
                    }
                    if(response.status != response.body.Code) {
                        console.log(response);
                        throw new Error('O status retornado nao é o mesmo informado no corpo da resposta');
                    }
                    return response.body;
                },

                /**
                 * @name Requisição_post.
                 * Faz uma requisição para a API que representa o backend da aplicação.
                 * 
                 * @param {string} url - A rota da API a ser consultada.
                 * @param {object} data - As informações a serem enviadas na requisição.
                 * @returns {object} - Um objeto contendo informações sobre a requisição:
                 *   - {boolean} valid: Um indicador de validade da requisição.
                 *   - {string} text: Uma mensagem de texto descrevendo o resultado da requisição.
                 *   - {object} data: Os dados retornados pela API (se a requisição for bem-sucedida).
                 */
                async post(url: string, data: any){
                    let response: any;

                    try {
                        response = await superagent
                        .post(`${api_http}${url}`)
                        .set({
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Credentials': 'true',
                        })
                        .send(data || null);
                    } catch (error: any) {
                        let e = JSON.parse(error.response.text)
                        if(e as Http){
                            response = {body: e, status: error.response.statusCode};
                        }else{
                            throw new Error(error.response);
                        }
                    }

                    try{
                        response.body as Http;
                    }catch (error: any){
                        let e = JSON.parse(error.response.text)
                        if(e as Http){
                            response = {body: e, status: error.response.statusCode};
                        }else{
                            throw new Error(error.response);
                        }
                    }
                    if(response.status != response.body.Code) {
                        console.log(response);
                        throw new Error('O status retornado nao é o mesmo informado no corpo da resposta');
                    }
                    return response.body;
                },

                /**
                 * @name Requisição_put.
                 * Faz uma requisição para a API que representa o backend da aplicação.
                 * 
                 * @param {string} url - A rota da API a ser consultada.
                 * @param {object} data - As informações a serem enviadas na requisição.
                 * @returns {object} - Um objeto contendo informações sobre a requisição:
                 *   - {boolean} valid: Um indicador de validade da requisição.
                 *   - {string} text: Uma mensagem de texto descrevendo o resultado da requisição.
                 *   - {object} data: Os dados retornados pela API (se a requisição for bem-sucedida).
                 */
                async put(url: string, data: any){
                    let response: any;

                    try {
                        response = await superagent
                        .put(`${api_http}${url}`)
                        .set({
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Credentials': 'true',
                        })
                        .send(data || null);
                    } catch (error: any) {
                        let e = JSON.parse(error.response.text)
                        if(e as Http){
                            response = {body: e, status: error.response.statusCode};
                        }else{
                            throw new Error(error.response);
                        }
                    }

                    try{
                        response.body as Http;
                    }catch (error: any){
                        let e = JSON.parse(error.response.text)
                        if(e as Http){
                            response = {body: e, status: error.response.statusCode};
                        }else{
                            throw new Error(error.response);
                        }
                    }
                    if(response.status != response.body.Code) {
                        console.log(response);
                        throw new Error('O status retornado nao é o mesmo informado no corpo da resposta');
                    }
                    return response.body;
                },

                /**
                 * @name Requisição_delete.
                 * Faz uma requisição para a API que representa o backend da aplicação.
                 * 
                 * @param {string} url - A rota da API a ser consultada.
                 * @param {object} data - As informações a serem enviadas na requisição.
                 * @returns {object} - Um objeto contendo informações sobre a requisição:
                 *   - {boolean} valid: Um indicador de validade da requisição.
                 *   - {string} text: Uma mensagem de texto descrevendo o resultado da requisição.
                 *   - {object} data: Os dados retornados pela API (se a requisição for bem-sucedida).
                 */
                async delete(url: string, data: any){
                    let response: any;

                    try {
                        response = await superagent
                        .delete(`${api_http}${url}`)
                        .set({
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Credentials': 'true',
                        })
                        .send(data || null);
                    } catch (error: any) {
                        let e = JSON.parse(error.response.text)
                        if(e as Http){
                            response = {body: e, status: error.response.statusCode};
                        }else{
                            throw new Error(error.response);
                        }
                    }

                    try{
                        response.body as Http;
                    }catch (error: any){
                        let e = JSON.parse(error.response.text)
                        if(e as Http){
                            response = {body: e, status: error.response.statusCode};
                        }else{
                            throw new Error(error.response);
                        }
                    }
                    if(response.status != response.body.Code) {
                        console.log(response);
                        throw new Error('O status retornado nao é o mesmo informado no corpo da resposta');
                    }
                    return response.body;
                },
            }
        }
    }
});