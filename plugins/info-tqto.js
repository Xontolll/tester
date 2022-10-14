(function (s, C) {
    const m = s();

    function N(s, C) {
        return T(s - 0x38d, C);
    }

    function V(s, C) {
        return p(C - -0x162, s);
    }
    while (true) {
        try {
            const x = -parseInt(N(0x563, 'GS3A')) / 0x1 + parseInt(V(0x8a, 0x7b)) / 0x2 * (-parseInt(V(0x54, 0x5e)) / 0x3) + parseInt(V(0x58, 0x6c)) / 0x4 + parseInt(N(0x558, '50@z')) / 0x5 + -parseInt(V(0x74, 0x75)) / 0x6 * (parseInt(N(0x56d, 'anNQ')) / 0x7) + -parseInt(V(0x7e, 0x79)) / 0x8 + -parseInt(V(0x83, 0x73)) / 0x9 * (-parseInt(N(0x555, '4e)R')) / 0xa);
            if (x === C) break;
            else m.push(m.shift());
        } catch (Y) {
            m.push(m.shift());
        }
    }
}(u, 0x52036));

function p(T, X) {
    const i = u();
    return p = function (E, s) {
        E = E - 0x1bf;
        let C = i[E];
        if (p['zGjuCI'] === undefined) {
            var m = function (I) {
                const G = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let y = '',
                    L = '';
                for (let A = 0x0, w, K, q = 0x0; K = I['charAt'](q++); ~K && (w = A % 0x4 ? w * 0x40 + K : K, A++ % 0x4) ? y += String['fromCharCode'](0xff & w >> (-0x2 * A & 0x6)) : 0x0) {
                    K = G['indexOf'](K);
                }
                for (let U = 0x0, N = y['length']; U < N; U++) {
                    L += '%' + ('00' + y['charCodeAt'](U)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(L);
            };
            p['hchCok'] = m, T = arguments, p['zGjuCI'] = true;
        }
        const x = i[0x0],
            Y = E + x,
            a = T[Y];
        return !a ? (C = p['hchCok'](C), T[Y] = C) : C = a, C;
    }, p(T, X);
}
import X from 'fs';

function u() {
    const n = ['caf5BmoWW57cTCkzr37dI8kVWPq', 'C2vUzdncDxr0B25jBwC', 'uSocWRZdMW', 'mJe5mZK3mKrmtMLxyG', 'q3jLzgL0', 'k8oZWQ8', 'cLFHTiaGt3FjTog0H8QaidOG', 'iokDQsdILiJILiJILihIN5RIN53IN6q', 't3DUzxi', 'Dhf0BW', 'mtKZotqXENzQuK5q', 'CchcQConEqhcNMWRCry5', 'mtjVrxLUzK4', 'AgvSCa', 'cLpHTiqGqUg0GhpHTiCGoIbzB3vuDwjLifDiie1prfmGrevwcLpHTiqGt8QaYAOGoIa', 'kCkeF1v7DxJdVHBcJ8obW6G7kZqXqLuJW4ldNSoEkslcT8oxthpcLq', 'ndaYmZa0mfDiuKfJDq', 't8kdW5BdTNiTW6C', 'mtm3ndrtEKzdveC', 'C2vUzgvY', 'Fmk+Agi', 'C8oapXu5DM7cPGBcLCofW7Gy', 'nJi4mtm2mti4mtGZmYa', 'cIRILRGGlsaTic0G4Ocu44cmifrOyw5RCYbgB3iGu3vODsdJGi3IGjqGlsaTic0G4PEckGOQ4P2jifDiie1prfmGrevwoIOkkUkDIsblyw5UywnOyw46kGOQ4P2jifbHCgfOlunOyw46kGOQ4P2jiePVAgfUBMvZoIOkkUkDIsblCMLZBMe6kGOQ4P2jifjSEgzSEtOQcG', 'cmomWQZdHSkIqq', 'y2HHDa', 'lM1LBNu', 'C3bSAxq', 'y29TBwfUza', 'mJu4rwjMtwjX', 'twvUDq', 'e8k1WRz/W7T8f8kIwCkqW6P0WQK', 'mZmWnteWmhjpuhDkDW', 'lI90AhvTyM5HAwWUANbN', 'ndy4mtKYz3jewNLO', '4P+L4P+E4P+A4Psb4Psi4PsiiokDQcbiYO8G', 'nNldOCkqivdcNa', 'WRVcQfVdRXhdO8o2lHW', 'uUg0H+g0Hog0J+g0HEg0HYbcYO8GoIa', 'ntKWwefPreHR'];
    u = function () {
        return n;
    };
    return u();
}
import i from 'node-fetch';
import E from 'moment-timezone';

function R(s, C) {
    return T(C - -0x34e, s);
}
let handler = async (s, {
    conn: C,
    args: x,
    command: Y
}) => {
    let a = '@' + s['sender'][v(0x56, 'GS3A')](/@.+/, ''),
        I = O(0x39d, 0x392),
        G = '0',
        y = '6283164445159',
        L = '@' + I['split']
    `@` [0x0];

    function v(s, C) {
        return T(s - -0x171, C);
    }
    let A = '@' + y['split']
    `@` [0x0], w = '@' + G[O(0x39a, 0x397)]
    `@` [0x0];

    function O(s, C) {
        return p(C - 0x1b1, s);
    }
    let K = [s[O(0x394, 0x38f)]],
        q = O(0x385, 0x377) + a + O(0x385, 0x383),
        U = O(0x386, 0x37a) + nameown + O(0x387, 0x382) + nameown + O(0x377, 0x38a) + A + '\x0aMᴀʀᴋ Zᴜᴋᴇʙᴇʀɢ : ' + w + '\x0aMʏ Pʀᴏᴊᴇᴄᴛ : fix-bot-v3\x0a\x0a⫹❰⫺ Bɪɢ Tʜᴀɴᴋs Tᴏ ⫹❱⫺\x0a⭝ Tᴜʜᴀɴ Yᴀɴɢ Mᴀʜᴀ Esᴀ\x0a⭝ Oʀᴀɴɢ Tᴜᴀ\x0a⭝ Tᴇᴍᴇɴ Gᴡ\x0a\x0a\x0a*▸ - - - —「 BIG THANKS TO 」— - - - ◂*\x0a*❉ Adiwajshing:*\x0ahttps://github.com/adiwajshing\x0a*❉ Nurutomo:*\x0ahttps://github.com/Nurutomo\x0a*❉ Istikmal:* \x0ahttps://github.com/BochilGaming\x0a*❉ Ariffb:*\x0ahttps://github.com/Ariffb25\x0a*❉ Ilman:*\x0ahttps://github.com/ilmanhdyt\x0a*❉ Amirul:*\x0ahttps://github.com/amiruldev20\x0a*❉ Rasel:*\x0ahttps://github.com/raselcomel\x0a*❉ Fatur:*\x0ahttps://github.com/Ftwrr\x0a*❉ Rominaru:*\x0ahttps://github.com/Rominaru\x0a*❉ Kannachann:*\x0ahttps://github.com/Kannachann\x0a*❉ The.sad.boy01:*\x0ahttps://github.com/kangsad01\x0a*❉ Ameliascrf:*\x0ahttps://github.com/Ameliascrf\x0a*❉ Fokus ID:*\x0ahttps://github.com/Fokusdotid\x0a*❉ Johannes:*\x0ahttps://github.com/Johannes2803\x0a*❉ BrunoSobrino:*\x0ahttps://github.com/BrunoSobrino\x0a*❉ Krisna:*\x0ahttps://github.com/NevtBotz\x0a*❉ LitRHap:*\x0ahttps://github.com/LitRHap\x0a*❉ Rlxfly:*\x0ahttps://github.com/Rlxfly\x0a*❉ Aine:*\x0ahttps://github.com/Aiinne\x0a*❉ Papah-Chan:*\x0ahttps://github.com/FahriAdison\x0a*❉ WH MODS DEV:*\x0ahttps://github.com/WH-MODS-BOT\x0a*❉ ALDI:*\x0ahttps://github.com/Hyuura-Official\x0a*▸ - - - —「 Penulis Ulang 」— - - - ◂*\x0a*❉ ' + namagithub + v(0x5f, 'JyDF') + linkgithub + O(0x384, 0x393);
    C[O(0x37f, 0x37d)](s[O(0x395, 0x395)], 'https://i.ibb.co/XZrK6yQ/transformers.jpg', q, U, O(0x384, 0x372), O(0x394, 0x396), O(0x398, 0x384), v(0x72, 'egDh'), O(0x36e, 0x380), v(0x6b, 'n[Il'), fakes, {
        'contextInfo': {
            'externalAdReply': {
                'showAdAttribution': true,
                'mediaUrl': v(0x69, 'anNQ'),
                'mediaType': 0x2,
                'description': sgc,
                'title': 'Jᴏɪɴ Sɪɴɪ Cᴜʏ',
                'body': wm,
                'thumbnail': X['readFileSync'](O(0x37b, 0x375)),
                'sourceUrl': sig
            }
        }
    });
};

function k(s, C) {
    return p(s - 0x301, C);
}
handler[k(0x4d9, 0x4db)] = [k(0x4d5, 0x4e8)], handler[R('egDh', -0x181)] = [R('Aki9', -0x16f), 'info'], handler[k(0x4c0, 0x4c5)] = /^(credits|credit|thanks|thanksto|tqto)$/i;

function T(p, X) {
    const i = u();
    return T = function (E, s) {
        E = E - 0x1bf;
        let C = i[E];
        if (T['tjfocC'] === undefined) {
            var m = function (G) {
                const y = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let L = '',
                    A = '';
                for (let w = 0x0, K, q, U = 0x0; q = G['charAt'](U++); ~q && (K = w % 0x4 ? K * 0x40 + q : q, w++ % 0x4) ? L += String['fromCharCode'](0xff & K >> (-0x2 * w & 0x6)) : 0x0) {
                    q = y['indexOf'](q);
                }
                for (let N = 0x0, V = L['length']; N < V; N++) {
                    A += '%' + ('00' + L['charCodeAt'](N)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(A);
            };
            const I = function (G, L) {
                let A = [],
                    w = 0x0,
                    K, q = '';
                G = m(G);
                let U;
                for (U = 0x0; U < 0x100; U++) {
                    A[U] = U;
                }
                for (U = 0x0; U < 0x100; U++) {
                    w = (w + A[U] + L['charCodeAt'](U % L['length'])) % 0x100, K = A[U], A[U] = A[w], A[w] = K;
                }
                U = 0x0, w = 0x0;
                for (let N = 0x0; N < G['length']; N++) {
                    U = (U + 0x1) % 0x100, w = (w + A[U]) % 0x100, K = A[U], A[U] = A[w], A[w] = K, q += String['fromCharCode'](G['charCodeAt'](N) ^ A[(A[U] + A[w]) % 0x100]);
                }
                return q;
            };
            T['sJqqms'] = I, p = arguments, T['tjfocC'] = true;
        }
        const x = i[0x0],
            Y = E + x,
            a = p[Y];
        return !a ? (T['fUwgoX'] === undefined && (T['fUwgoX'] = true), C = T['sJqqms'](C, s), p[Y] = C) : C = a, C;
    }, T(p, X);
}
export default handler;