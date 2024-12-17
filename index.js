const express = require('express');
const app = express();
const cron = require("node-cron");
cron.schedule("55 8 * * *", function() {
// cron.schedule("*/10 * * * * *", function() {
    const randomClient  =  Math.round(Math.random()* 1000000000000);
    let apiResponse =  fetch('https://msgapi.teams.live.com/v1/users/ME/conversations/19%3A08101f076d53453f9f6a0d74de395dfd%40thread.skype/messages?x-ecs-etag=%2243Utls98hSKcfYfc%2BLECq%2Bm1SjCqT7KH%2BcpVSWeyOy4%3D%22', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'accept-language': 'en-US,en;q=0.9,ta;q=0.8',
            'authentication': 'skypetoken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3Qjg2NEUwQjM0QUQ0RDQyRTM3OTRBRTAyNTAwRDVBNTE5MjA1RjUiLCJ4NXQiOiJWN2hrNExOSzFOUXVONVN1QWxBTldsR1NCZlUiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MzQ0MDU4OTYsImV4cCI6MTczNDQ5MjI5NCwic2t5cGVpZCI6ImxpdmU6LmNpZC5mMmI1NmUwMTE3MjY1NjUzIiwic2NwIjo5NTYsImNzaSI6IjE3MzQ0MDU4OTQiLCJjaWQiOiJmMmI1NmUwMTE3MjY1NjUzIiwiYWF0IjoxNzI3OTQwMjc2fQ.DI4oY-DxVWXokB3QfZ2pICqrRoNbF8OaLb0PIdbEnJxhUrf6GGP-lPaoDx40BqAmd15UJaZnvFhHUNQ--ksFsn02KGPSVP_mzdptwjWuusqQHen8KXj7qSEImdWG8PpFX1sJblCjxIG2U06IThF1DHZ1yY3eyk5CKT3YdI5hjQzNhixF_AjfWhmPSNZWfEKcNYMXSA-9_73_D4st3pMgT23QHEsO41J_Yl0yPRyZJ2pGjQNfhuVcMg0veQhR3mK3OunyLYm53jrldJ6nv3DnVwC3ZVLAaSOXuOQ6fa1Npja0X5IqBsCuuwC2ejCX2Q4NFMU3XaeuHNQ479xzLCtm3g',
            'behavioroverride': 'redirectAs404',
            'clientinfo': 'os=Windows; osVer=10; proc=x86; lcid=en-US; deviceType=1; country=IN; clientName=skype4life; clientVer=1418/8.133.0.202//skype4life; timezone=Asia/Calcutta',
            'content-type': 'application/json',
            'dnt': '1',
            'ms-ic3-product': 'Sfl',
            'origin': 'https://web.skype.com',
            'priority': 'u=1, i',
            'referer': 'https://web.skype.com/',
            'registrationtoken': 'registrationToken=U2lnbmF0dXJlOjI6Mjg6QVFRQUFBQXdhL0QydUpSSkMyZ0E4WUtKL1pzNDtWZXJzaW9uOjY6MToxO0lzc3VlVGltZTo0OjE5OjUyNTAzODYwOTQzMDE3NTU2MDc7RXAuSWRUeXBlOjc6MTo4O0VwLklkOjI6MjY6bGl2ZTouY2lkLmYyYjU2ZTAxMTcyNjU2NTM7RXAuRXBpZDo1OjM2OmJkOWI5MTg2LWJjZTktNDA0NS05ODVmLTFhM2FmOWQxOGUyYjtFcC5Mb2dpblRpbWU6NzoxOjA7RXAuQXV0aFRpbWU6NDoxOTo1MjUwMzg2MDk0MzAwODE4MDY5O0VwLkF1dGhUeXBlOjc6MjoxNTtFcC5FeHBUaW1lOjQ6MTk6NTI1MDM4NjkwOTM2NzM4NzkwNDtFcC5Ta3lwZVRva2VuOjI6Njg4OmV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJalUzUWpnMk5FVXdRak0wUVVRMFJEUXlSVE0zT1RSQlJUQXlOVEF3UkRWQk5URTVNakExUmpVaUxDSjROWFFpT2lKV04yaHJORXhPU3pGT1VYVk9OVk4xUVd4QlRsZHNSMU5DWmxVaUxDSjBlWEFpT2lKS1YxUWlmUS5leUpwWVhRaU9qRTNNelEwTURVNE9UWXNJbVY0Y0NJNk1UY3pORFE1TWpJNU5Dd2ljMnQ1Y0dWcFpDSTZJbXhwZG1VNkxtTnBaQzVtTW1JMU5tVXdNVEUzTWpZMU5qVXpJaXdpYzJOd0lqbzVOVFlzSW1OemFTSTZJakUzTXpRME1EVTRPVFFpTENKamFXUWlPaUptTW1JMU5tVXdNVEUzTWpZMU5qVXpJaXdpWVdGMElqb3hOekkzT1RRd01qYzJmUS5ESTRvWS1EeFZXWG9rQjNRZloycElDcXJSb05iRjhPYUxiMFBJZGJFbkp4aFVyZjZHR1AtbFBhb0R4NDBCcUFtZDE1VUphWm52RmhIVU5RLS1rc0ZzbjAyS0dQU1ZQX216ZHB0d2pXdXVzcVFIZW44S1hqN3FTRUltZFdHOFBwRlgxc0pibENqeElHMlUwNklUaEYxREhaMXlZM2V5azVDS1QzWWRJNWhqUXpOaGl4Rl9BamZXaG1QU05aV2ZFS2NOWU1YU0EtOV83M19ENHN0M3BNZ1QyM1FIRXNPNDFKX1lsMHlQUnlaSjJwR2pRTmZodVZjTWcwdmVRaFIzbUszT3VueUxZbTUzanJsZEo2bnYzRG5Wd0MzWlZMQWFTT1h1T1E2ZmExTnBqYTBYNUlxQnNDdXV3QzJlakNYMlE0TkZNVTNYYWV1SE5RNDc5eHpMQ3RtM2c7VXNyLk5ldE1hc2s6MTE6MToyO1Vzci5YZnJDbnQ6NjoxOjA7VXNyLlJkcmN0RmxnOjI6MDo7VXNyLkV4cElkOjk6MTowO1Vzci5FeHBJZExhc3RMb2c6NDoxOjA7VXNlci5BdGhDdHh0OjI6NDQ0OkNsTnJlWEJsVkc5clpXNGFiR2wyWlRvdVkybGtMbVl5WWpVMlpUQXhNVGN5TmpVMk5UTUJBMVZwWXhReEx6RXZNREF3TVNBeE1qb3dNRG93TUNCQlRReE9iM1JUY0dWamFXWnBaV1JUVmlZWEFXNjE4Z0FBQUFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFiR2wyWlRvdVkybGtMbVl5WWpVMlpUQXhNVGN5TmpVMk5UTUFBQUFBQUFBQUFBQUhUbTlUWTI5eVpRQUFBQUFFQUFBQUFBQUFBQUFBQUFCVFZpWVhBVzYxOGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVJwc2FYWmxPaTVqYVdRdVpqSmlOVFpsTURFeE56STJOVFkxTXdBQUFBQUFCdTlnWndjQUFBQUlTV1JsYm5ScGRIa09TV1JsYm5ScGRIbFZjR1JoZEdVSVEyOXVkR0ZqZEhNT1EyOXVkR0ZqZEhOVmNHUmhkR1VJUTI5dGJXVnlZMlVOUTI5dGJYVnVhV05oZEdsdmJoVkRiMjF0ZFc1cFkyRjBhVzl1VW1WaFpFOXViSGtBQUE9PTs=; expires=1734492294; endpointId={bd9b9186-bce9-4045-985f-1a3af9d18e2b}',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'x-ecs-etag': '"43Utls98hSKcfYfc+LECq+m1SjCqT7KH+cpVSWeyOy4="'
        },
        body: JSON.stringify({
            'clientmessageid': `${randomClient}`,
            'composetime': '2024-12-17T05:25:29.886Z',
            'content': 'Good Morning Akka',
            'messagetype': 'RichText',
            'contenttype': 'text',
            'imdisplayname': 'Amaresh Raja'
        })
    });


    // let apiResponse =   fetch('https://msgapi.teams.live.com/v1/users/ME/conversations/19%3A646796d8c4dc4d85ac2f36d9bd624c65%40thread.skype/messages?x-ecs-etag=%2243Utls98hSKcfYfc%2BLECq%2Bm1SjCqT7KH%2BcpVSWeyOy4%3D%22', {
    //     method: 'POST',
    //     headers: {
    //         'accept': 'application/json',
    //         'accept-language': 'en-US,en;q=0.9,ta;q=0.8',
    //         'authentication': 'skypetoken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3Qjg2NEUwQjM0QUQ0RDQyRTM3OTRBRTAyNTAwRDVBNTE5MjA1RjUiLCJ4NXQiOiJWN2hrNExOSzFOUXVONVN1QWxBTldsR1NCZlUiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MzQ0MDU4OTYsImV4cCI6MTczNDQ5MjI5NCwic2t5cGVpZCI6ImxpdmU6LmNpZC5mMmI1NmUwMTE3MjY1NjUzIiwic2NwIjo5NTYsImNzaSI6IjE3MzQ0MDU4OTQiLCJjaWQiOiJmMmI1NmUwMTE3MjY1NjUzIiwiYWF0IjoxNzI3OTQwMjc2fQ.DI4oY-DxVWXokB3QfZ2pICqrRoNbF8OaLb0PIdbEnJxhUrf6GGP-lPaoDx40BqAmd15UJaZnvFhHUNQ--ksFsn02KGPSVP_mzdptwjWuusqQHen8KXj7qSEImdWG8PpFX1sJblCjxIG2U06IThF1DHZ1yY3eyk5CKT3YdI5hjQzNhixF_AjfWhmPSNZWfEKcNYMXSA-9_73_D4st3pMgT23QHEsO41J_Yl0yPRyZJ2pGjQNfhuVcMg0veQhR3mK3OunyLYm53jrldJ6nv3DnVwC3ZVLAaSOXuOQ6fa1Npja0X5IqBsCuuwC2ejCX2Q4NFMU3XaeuHNQ479xzLCtm3g',
    //         'behavioroverride': 'redirectAs404',
    //         'clientinfo': 'os=Windows; osVer=10; proc=x86; lcid=en-US; deviceType=1; country=IN; clientName=skype4life; clientVer=1418/8.133.0.202//skype4life; timezone=Asia/Calcutta',
    //         'content-type': 'application/json',
    //         'dnt': '1',
    //         'ms-ic3-product': 'Sfl',
    //         'origin': 'https://web.skype.com',
    //         'priority': 'u=1, i',
    //         'referer': 'https://web.skype.com/',
    //         'registrationtoken': 'registrationToken=U2lnbmF0dXJlOjI6Mjg6QVFRQUFBQXdhL0QydUpSSkMyZ0E4WUtKL1pzNDtWZXJzaW9uOjY6MToxO0lzc3VlVGltZTo0OjE5OjUyNTAzODYwOTQzMDE3NTU2MDc7RXAuSWRUeXBlOjc6MTo4O0VwLklkOjI6MjY6bGl2ZTouY2lkLmYyYjU2ZTAxMTcyNjU2NTM7RXAuRXBpZDo1OjM2OmJkOWI5MTg2LWJjZTktNDA0NS05ODVmLTFhM2FmOWQxOGUyYjtFcC5Mb2dpblRpbWU6NzoxOjA7RXAuQXV0aFRpbWU6NDoxOTo1MjUwMzg2MDk0MzAwODE4MDY5O0VwLkF1dGhUeXBlOjc6MjoxNTtFcC5FeHBUaW1lOjQ6MTk6NTI1MDM4NjkwOTM2NzM4NzkwNDtFcC5Ta3lwZVRva2VuOjI6Njg4OmV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJalUzUWpnMk5FVXdRak0wUVVRMFJEUXlSVE0zT1RSQlJUQXlOVEF3UkRWQk5URTVNakExUmpVaUxDSjROWFFpT2lKV04yaHJORXhPU3pGT1VYVk9OVk4xUVd4QlRsZHNSMU5DWmxVaUxDSjBlWEFpT2lKS1YxUWlmUS5leUpwWVhRaU9qRTNNelEwTURVNE9UWXNJbVY0Y0NJNk1UY3pORFE1TWpJNU5Dd2ljMnQ1Y0dWcFpDSTZJbXhwZG1VNkxtTnBaQzVtTW1JMU5tVXdNVEUzTWpZMU5qVXpJaXdpYzJOd0lqbzVOVFlzSW1OemFTSTZJakUzTXpRME1EVTRPVFFpTENKamFXUWlPaUptTW1JMU5tVXdNVEUzTWpZMU5qVXpJaXdpWVdGMElqb3hOekkzT1RRd01qYzJmUS5ESTRvWS1EeFZXWG9rQjNRZloycElDcXJSb05iRjhPYUxiMFBJZGJFbkp4aFVyZjZHR1AtbFBhb0R4NDBCcUFtZDE1VUphWm52RmhIVU5RLS1rc0ZzbjAyS0dQU1ZQX216ZHB0d2pXdXVzcVFIZW44S1hqN3FTRUltZFdHOFBwRlgxc0pibENqeElHMlUwNklUaEYxREhaMXlZM2V5azVDS1QzWWRJNWhqUXpOaGl4Rl9BamZXaG1QU05aV2ZFS2NOWU1YU0EtOV83M19ENHN0M3BNZ1QyM1FIRXNPNDFKX1lsMHlQUnlaSjJwR2pRTmZodVZjTWcwdmVRaFIzbUszT3VueUxZbTUzanJsZEo2bnYzRG5Wd0MzWlZMQWFTT1h1T1E2ZmExTnBqYTBYNUlxQnNDdXV3QzJlakNYMlE0TkZNVTNYYWV1SE5RNDc5eHpMQ3RtM2c7VXNyLk5ldE1hc2s6MTE6MToyO1Vzci5YZnJDbnQ6NjoxOjA7VXNyLlJkcmN0RmxnOjI6MDo7VXNyLkV4cElkOjk6MTowO1Vzci5FeHBJZExhc3RMb2c6NDoxOjA7VXNlci5BdGhDdHh0OjI6NDQ0OkNsTnJlWEJsVkc5clpXNGFiR2wyWlRvdVkybGtMbVl5WWpVMlpUQXhNVGN5TmpVMk5UTUJBMVZwWXhReEx6RXZNREF3TVNBeE1qb3dNRG93TUNCQlRReE9iM1JUY0dWamFXWnBaV1JUVmlZWEFXNjE4Z0FBQUFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFiR2wyWlRvdVkybGtMbVl5WWpVMlpUQXhNVGN5TmpVMk5UTUFBQUFBQUFBQUFBQUhUbTlUWTI5eVpRQUFBQUFFQUFBQUFBQUFBQUFBQUFCVFZpWVhBVzYxOGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVJwc2FYWmxPaTVqYVdRdVpqSmlOVFpsTURFeE56STJOVFkxTXdBQUFBQUFCdTlnWndjQUFBQUlTV1JsYm5ScGRIa09TV1JsYm5ScGRIbFZjR1JoZEdVSVEyOXVkR0ZqZEhNT1EyOXVkR0ZqZEhOVmNHUmhkR1VJUTI5dGJXVnlZMlVOUTI5dGJYVnVhV05oZEdsdmJoVkRiMjF0ZFc1cFkyRjBhVzl1VW1WaFpFOXViSGtBQUE9PTs=; expires=1734492294; endpointId={bd9b9186-bce9-4045-985f-1a3af9d18e2b}',
    //         'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Windows"',
    //         'sec-fetch-dest': 'empty',
    //         'sec-fetch-mode': 'cors',
    //         'sec-fetch-site': 'cross-site',
    //         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    //         'x-ecs-etag': '"43Utls98hSKcfYfc+LECq+m1SjCqT7KH+cpVSWeyOy4="'
    //     },
    //     body: JSON.stringify({
    //         'clientmessageid': `${randomClient}`,
    //         'composetime': '2024-12-17T05:08:39.549Z',
    //         'content': 'Success in senting message',
    //         'messagetype': 'RichText',
    //         'contenttype': 'text',
    //         'imdisplayname': 'Amaresh Raja'
    //     })
    // });

    apiResponse.then((res)=>{
        if(res && res.status == 201 && res.statusText == 'Created'){
            const randomClient  =  Math.round(Math.random()* 1000000000000);
            let amareshMessage =  fetch('https://msgapi.teams.live.com/v1/users/ME/conversations/19%3A646796d8c4dc4d85ac2f36d9bd624c65%40thread.skype/messages?x-ecs-etag=%2243Utls98hSKcfYfc%2BLECq%2Bm1SjCqT7KH%2BcpVSWeyOy4%3D%22', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'accept-language': 'en-US,en;q=0.9,ta;q=0.8',
                    'authentication': 'skypetoken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3Qjg2NEUwQjM0QUQ0RDQyRTM3OTRBRTAyNTAwRDVBNTE5MjA1RjUiLCJ4NXQiOiJWN2hrNExOSzFOUXVONVN1QWxBTldsR1NCZlUiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MzQ0MDU4OTYsImV4cCI6MTczNDQ5MjI5NCwic2t5cGVpZCI6ImxpdmU6LmNpZC5mMmI1NmUwMTE3MjY1NjUzIiwic2NwIjo5NTYsImNzaSI6IjE3MzQ0MDU4OTQiLCJjaWQiOiJmMmI1NmUwMTE3MjY1NjUzIiwiYWF0IjoxNzI3OTQwMjc2fQ.DI4oY-DxVWXokB3QfZ2pICqrRoNbF8OaLb0PIdbEnJxhUrf6GGP-lPaoDx40BqAmd15UJaZnvFhHUNQ--ksFsn02KGPSVP_mzdptwjWuusqQHen8KXj7qSEImdWG8PpFX1sJblCjxIG2U06IThF1DHZ1yY3eyk5CKT3YdI5hjQzNhixF_AjfWhmPSNZWfEKcNYMXSA-9_73_D4st3pMgT23QHEsO41J_Yl0yPRyZJ2pGjQNfhuVcMg0veQhR3mK3OunyLYm53jrldJ6nv3DnVwC3ZVLAaSOXuOQ6fa1Npja0X5IqBsCuuwC2ejCX2Q4NFMU3XaeuHNQ479xzLCtm3g',
                    'behavioroverride': 'redirectAs404',
                    'clientinfo': 'os=Windows; osVer=10; proc=x86; lcid=en-US; deviceType=1; country=IN; clientName=skype4life; clientVer=1418/8.133.0.202//skype4life; timezone=Asia/Calcutta',
                    'content-type': 'application/json',
                    'dnt': '1',
                    'ms-ic3-product': 'Sfl',
                    'origin': 'https://web.skype.com',
                    'priority': 'u=1, i',
                    'referer': 'https://web.skype.com/',
                    'registrationtoken': 'registrationToken=U2lnbmF0dXJlOjI6Mjg6QVFRQUFBQXdhL0QydUpSSkMyZ0E4WUtKL1pzNDtWZXJzaW9uOjY6MToxO0lzc3VlVGltZTo0OjE5OjUyNTAzODYwOTQzMDE3NTU2MDc7RXAuSWRUeXBlOjc6MTo4O0VwLklkOjI6MjY6bGl2ZTouY2lkLmYyYjU2ZTAxMTcyNjU2NTM7RXAuRXBpZDo1OjM2OmJkOWI5MTg2LWJjZTktNDA0NS05ODVmLTFhM2FmOWQxOGUyYjtFcC5Mb2dpblRpbWU6NzoxOjA7RXAuQXV0aFRpbWU6NDoxOTo1MjUwMzg2MDk0MzAwODE4MDY5O0VwLkF1dGhUeXBlOjc6MjoxNTtFcC5FeHBUaW1lOjQ6MTk6NTI1MDM4NjkwOTM2NzM4NzkwNDtFcC5Ta3lwZVRva2VuOjI6Njg4OmV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJalUzUWpnMk5FVXdRak0wUVVRMFJEUXlSVE0zT1RSQlJUQXlOVEF3UkRWQk5URTVNakExUmpVaUxDSjROWFFpT2lKV04yaHJORXhPU3pGT1VYVk9OVk4xUVd4QlRsZHNSMU5DWmxVaUxDSjBlWEFpT2lKS1YxUWlmUS5leUpwWVhRaU9qRTNNelEwTURVNE9UWXNJbVY0Y0NJNk1UY3pORFE1TWpJNU5Dd2ljMnQ1Y0dWcFpDSTZJbXhwZG1VNkxtTnBaQzVtTW1JMU5tVXdNVEUzTWpZMU5qVXpJaXdpYzJOd0lqbzVOVFlzSW1OemFTSTZJakUzTXpRME1EVTRPVFFpTENKamFXUWlPaUptTW1JMU5tVXdNVEUzTWpZMU5qVXpJaXdpWVdGMElqb3hOekkzT1RRd01qYzJmUS5ESTRvWS1EeFZXWG9rQjNRZloycElDcXJSb05iRjhPYUxiMFBJZGJFbkp4aFVyZjZHR1AtbFBhb0R4NDBCcUFtZDE1VUphWm52RmhIVU5RLS1rc0ZzbjAyS0dQU1ZQX216ZHB0d2pXdXVzcVFIZW44S1hqN3FTRUltZFdHOFBwRlgxc0pibENqeElHMlUwNklUaEYxREhaMXlZM2V5azVDS1QzWWRJNWhqUXpOaGl4Rl9BamZXaG1QU05aV2ZFS2NOWU1YU0EtOV83M19ENHN0M3BNZ1QyM1FIRXNPNDFKX1lsMHlQUnlaSjJwR2pRTmZodVZjTWcwdmVRaFIzbUszT3VueUxZbTUzanJsZEo2bnYzRG5Wd0MzWlZMQWFTT1h1T1E2ZmExTnBqYTBYNUlxQnNDdXV3QzJlakNYMlE0TkZNVTNYYWV1SE5RNDc5eHpMQ3RtM2c7VXNyLk5ldE1hc2s6MTE6MToyO1Vzci5YZnJDbnQ6NjoxOjA7VXNyLlJkcmN0RmxnOjI6MDo7VXNyLkV4cElkOjk6MTowO1Vzci5FeHBJZExhc3RMb2c6NDoxOjA7VXNlci5BdGhDdHh0OjI6NDQ0OkNsTnJlWEJsVkc5clpXNGFiR2wyWlRvdVkybGtMbVl5WWpVMlpUQXhNVGN5TmpVMk5UTUJBMVZwWXhReEx6RXZNREF3TVNBeE1qb3dNRG93TUNCQlRReE9iM1JUY0dWamFXWnBaV1JUVmlZWEFXNjE4Z0FBQUFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFiR2wyWlRvdVkybGtMbVl5WWpVMlpUQXhNVGN5TmpVMk5UTUFBQUFBQUFBQUFBQUhUbTlUWTI5eVpRQUFBQUFFQUFBQUFBQUFBQUFBQUFCVFZpWVhBVzYxOGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVJwc2FYWmxPaTVqYVdRdVpqSmlOVFpsTURFeE56STJOVFkxTXdBQUFBQUFCdTlnWndjQUFBQUlTV1JsYm5ScGRIa09TV1JsYm5ScGRIbFZjR1JoZEdVSVEyOXVkR0ZqZEhNT1EyOXVkR0ZqZEhOVmNHUmhkR1VJUTI5dGJXVnlZMlVOUTI5dGJYVnVhV05oZEdsdmJoVkRiMjF0ZFc1cFkyRjBhVzl1VW1WaFpFOXViSGtBQUE9PTs=; expires=1734492294; endpointId={bd9b9186-bce9-4045-985f-1a3af9d18e2b}',
                    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'cross-site',
                    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
                    'x-ecs-etag': '"43Utls98hSKcfYfc+LECq+m1SjCqT7KH+cpVSWeyOy4="'
                },
                body: JSON.stringify({
                    'clientmessageid': `${randomClient}`,
                    'composetime': '2024-12-17T05:08:39.549Z',
                    'content': `Success in senting message  ${new Date()}`,
                    'messagetype': 'RichText',
                    'contenttype': 'text',
                    'imdisplayname': 'Amaresh Raja'
                })
            });
            amareshMessage.then((res)=>{
                console.log("Message successfully sended...");
                
            })

        }
        
    });
    
    });

    


    // fetch('https://msgapi.teams.live.com/v1/users/ME/conversations/8%3Alive%3A.cid.a76bf8ac32514864/messages?x-ecs-etag=%2243Utls98hSKcfYfc%2BLECq%2Bm1SjCqT7KH%2BcpVSWeyOy4%3D%22', {
    //     method: 'POST',
    //     headers: {
    //         'accept': 'application/json',
    //         'accept-language': 'en-US,en;q=0.9,ta;q=0.8',
    //         'authentication': 'skypetoken=eyJhbGciOiJSUzI1NiIsImtpZCI6IjU3Qjg2NEUwQjM0QUQ0RDQyRTM3OTRBRTAyNTAwRDVBNTE5MjA1RjUiLCJ4NXQiOiJWN2hrNExOSzFOUXVONVN1QWxBTldsR1NCZlUiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MzQ0MDU4OTYsImV4cCI6MTczNDQ5MjI5NCwic2t5cGVpZCI6ImxpdmU6LmNpZC5mMmI1NmUwMTE3MjY1NjUzIiwic2NwIjo5NTYsImNzaSI6IjE3MzQ0MDU4OTQiLCJjaWQiOiJmMmI1NmUwMTE3MjY1NjUzIiwiYWF0IjoxNzI3OTQwMjc2fQ.DI4oY-DxVWXokB3QfZ2pICqrRoNbF8OaLb0PIdbEnJxhUrf6GGP-lPaoDx40BqAmd15UJaZnvFhHUNQ--ksFsn02KGPSVP_mzdptwjWuusqQHen8KXj7qSEImdWG8PpFX1sJblCjxIG2U06IThF1DHZ1yY3eyk5CKT3YdI5hjQzNhixF_AjfWhmPSNZWfEKcNYMXSA-9_73_D4st3pMgT23QHEsO41J_Yl0yPRyZJ2pGjQNfhuVcMg0veQhR3mK3OunyLYm53jrldJ6nv3DnVwC3ZVLAaSOXuOQ6fa1Npja0X5IqBsCuuwC2ejCX2Q4NFMU3XaeuHNQ479xzLCtm3g',
    //         'behavioroverride': 'redirectAs404',
    //         'clientinfo': 'os=Windows; osVer=10; proc=x86; lcid=en-US; deviceType=1; country=IN; clientName=skype4life; clientVer=1418/8.133.0.202//skype4life; timezone=Asia/Calcutta',
    //         'content-type': 'application/json',
    //         'dnt': '1',
    //         'ms-ic3-product': 'Sfl',
    //         'origin': 'https://web.skype.com',
    //         'priority': 'u=1, i',
    //         'referer': 'https://web.skype.com/',
    //         'registrationtoken': 'registrationToken=U2lnbmF0dXJlOjI6Mjg6QVFRQUFBQXdhL0QydUpSSkMyZ0E4WUtKL1pzNDtWZXJzaW9uOjY6MToxO0lzc3VlVGltZTo0OjE5OjUyNTAzODYwOTQzMDE3NTU2MDc7RXAuSWRUeXBlOjc6MTo4O0VwLklkOjI6MjY6bGl2ZTouY2lkLmYyYjU2ZTAxMTcyNjU2NTM7RXAuRXBpZDo1OjM2OmJkOWI5MTg2LWJjZTktNDA0NS05ODVmLTFhM2FmOWQxOGUyYjtFcC5Mb2dpblRpbWU6NzoxOjA7RXAuQXV0aFRpbWU6NDoxOTo1MjUwMzg2MDk0MzAwODE4MDY5O0VwLkF1dGhUeXBlOjc6MjoxNTtFcC5FeHBUaW1lOjQ6MTk6NTI1MDM4NjkwOTM2NzM4NzkwNDtFcC5Ta3lwZVRva2VuOjI6Njg4OmV5SmhiR2NpT2lKU1V6STFOaUlzSW10cFpDSTZJalUzUWpnMk5FVXdRak0wUVVRMFJEUXlSVE0zT1RSQlJUQXlOVEF3UkRWQk5URTVNakExUmpVaUxDSjROWFFpT2lKV04yaHJORXhPU3pGT1VYVk9OVk4xUVd4QlRsZHNSMU5DWmxVaUxDSjBlWEFpT2lKS1YxUWlmUS5leUpwWVhRaU9qRTNNelEwTURVNE9UWXNJbVY0Y0NJNk1UY3pORFE1TWpJNU5Dd2ljMnQ1Y0dWcFpDSTZJbXhwZG1VNkxtTnBaQzVtTW1JMU5tVXdNVEUzTWpZMU5qVXpJaXdpYzJOd0lqbzVOVFlzSW1OemFTSTZJakUzTXpRME1EVTRPVFFpTENKamFXUWlPaUptTW1JMU5tVXdNVEUzTWpZMU5qVXpJaXdpWVdGMElqb3hOekkzT1RRd01qYzJmUS5ESTRvWS1EeFZXWG9rQjNRZloycElDcXJSb05iRjhPYUxiMFBJZGJFbkp4aFVyZjZHR1AtbFBhb0R4NDBCcUFtZDE1VUphWm52RmhIVU5RLS1rc0ZzbjAyS0dQU1ZQX216ZHB0d2pXdXVzcVFIZW44S1hqN3FTRUltZFdHOFBwRlgxc0pibENqeElHMlUwNklUaEYxREhaMXlZM2V5azVDS1QzWWRJNWhqUXpOaGl4Rl9BamZXaG1QU05aV2ZFS2NOWU1YU0EtOV83M19ENHN0M3BNZ1QyM1FIRXNPNDFKX1lsMHlQUnlaSjJwR2pRTmZodVZjTWcwdmVRaFIzbUszT3VueUxZbTUzanJsZEo2bnYzRG5Wd0MzWlZMQWFTT1h1T1E2ZmExTnBqYTBYNUlxQnNDdXV3QzJlakNYMlE0TkZNVTNYYWV1SE5RNDc5eHpMQ3RtM2c7VXNyLk5ldE1hc2s6MTE6MToyO1Vzci5YZnJDbnQ6NjoxOjA7VXNyLlJkcmN0RmxnOjI6MDo7VXNyLkV4cElkOjk6MTowO1Vzci5FeHBJZExhc3RMb2c6NDoxOjA7VXNlci5BdGhDdHh0OjI6NDQ0OkNsTnJlWEJsVkc5clpXNGFiR2wyWlRvdVkybGtMbVl5WWpVMlpUQXhNVGN5TmpVMk5UTUJBMVZwWXhReEx6RXZNREF3TVNBeE1qb3dNRG93TUNCQlRReE9iM1JUY0dWamFXWnBaV1JUVmlZWEFXNjE4Z0FBQUFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWFiR2wyWlRvdVkybGtMbVl5WWpVMlpUQXhNVGN5TmpVMk5UTUFBQUFBQUFBQUFBQUhUbTlUWTI5eVpRQUFBQUFFQUFBQUFBQUFBQUFBQUFCVFZpWVhBVzYxOGdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVJwc2FYWmxPaTVqYVdRdVpqSmlOVFpsTURFeE56STJOVFkxTXdBQUFBQUFCdTlnWndjQUFBQUlTV1JsYm5ScGRIa09TV1JsYm5ScGRIbFZjR1JoZEdVSVEyOXVkR0ZqZEhNT1EyOXVkR0ZqZEhOVmNHUmhkR1VJUTI5dGJXVnlZMlVOUTI5dGJYVnVhV05oZEdsdmJoVkRiMjF0ZFc1cFkyRjBhVzl1VW1WaFpFOXViSGtBQUE9PTs=; expires=1734492294; endpointId={bd9b9186-bce9-4045-985f-1a3af9d18e2b}',
    //         'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    //         'sec-ch-ua-mobile': '?0',
    //         'sec-ch-ua-platform': '"Windows"',
    //         'sec-fetch-dest': 'empty',
    //         'sec-fetch-mode': 'cors',
    //         'sec-fetch-site': 'cross-site',
    //         'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    //         'x-ecs-etag': '"43Utls98hSKcfYfc+LECq+m1SjCqT7KH+cpVSWeyOy4="'
    //     },
    //     body: JSON.stringify({
    //         'clientmessageid': `${randomClient}`,
    //         'composetime': '2024-12-17T05:15:29.844Z',
    //         'content': 'a',
    //         'messagetype': 'RichText',
    //         'contenttype': 'text',
    //         'imdisplayname': 'Amaresh Raja',
    //         'receiverdisplayname': 'Naveen kumar U'
    //     })
    // });
    
    // console.log("running a task every 10 second");


app.listen('3000',()=>{
    console.log("app is listning in port 3000");
    
})