import CryptoJS from 'crypto-js';

const useVagonServices = () => {
    // const _urlBase = 'https://api.vagon.io/app-stream-management/v2/streams/5c6223a6-ed82-454b-82d2-40ed07809b4e/machines';
    const _urlBase = 'https://api.vagon.io'
    const apiKey = '44a7e4c2-9591-49a4-a400-a4df13abe071';
    const apiSecret = '167f0b9b32214d8798eeaaa74735f47a';
    const nonce = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const timestamp = new Date().getTime();
    const method = 'GET';
    const path = '/app-stream-management/v2/streams/1672/machines'
    const body = '';

    const payload = apiKey + method + path + timestamp + nonce + body;

    const signature = CryptoJS.HmacSHA256(payload, apiSecret).toString(CryptoJS.enc.Hex);

    const getInstanceStatus = async () => {
        try {
            const headers = new Headers();
            headers.append('Authorization', `HMAC ${apiKey}:${signature}:${nonce}:${timestamp}`);
            headers.append('Content-Type', 'application/json');

            const requestOptions = {
                method: 'GET',
                headers: headers,
                redirect: 'follow'
            };

            const response = await fetch(_urlBase + path, requestOptions);
            const result = await response.json();

            const data = result.machines[0].attributes.status;

            return data;
        } catch(e) {
            throw e;
        } 
    }

    return { getInstanceStatus };
}

export default useVagonServices;