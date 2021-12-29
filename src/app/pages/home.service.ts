import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {

   }


   createUser(): Observable<any>{
    let test= {
      "tokenComercio": "-----BEGIN PGP MESSAGE-----\n\nwcBMAxtJWkepNe3rAQf/SkzqNlhSSLFjjflls6W76CmiAGOS7T6JRa+ZQ3ic\nRqdfxVQvfxL+sX8/r4eAKSDzpb8mUH7RpZa9Myf0ziIwM1ZdKGZzZZLNb4A+\ner5Fb/BFxAdamzJ21+p8DvnMzE+UruOW8OAodrFDsjeCCLOTdwIYGGLrwXFo\n+sLD7T/scKq5BBZUVX6FQF3MPLqbStD3wYxtFse18hMypAaejKg/Of5hfgBK\ndV06Oi0h6PcwoNj5Esrxx+XksthFbL8CAPUAMXuVlb+TfCMIgUXTgBshd/Vf\nsXe9sNaUwLFa/goiYj0nwYCz7aiPAZDjPjfAI+Lb+odvC86OAF2vrnO6OYTx\nG9JxAb9Wcy2p94ZA2vCGAtad/GHjjC9ROeg8/IQK2c2qyGAEF2+WLQ8tHoOd\nN/Q1rXIVVNO4z6YTSVi+KFvTMkpT4uXhWQ2zlyszsgahT2VC+IoV0n7K5uMi\nREFXZZU73Z51ShN/ODDBqR6z6OYP3rQgWAY=\n=AnqU\n-----END PGP MESSAGE-----\n",
      "tokenTerminal": "-----BEGIN PGP MESSAGE-----\n\nwcBMAxtJWkepNe3rAQgAizmKGyjHQ1PH8eNbgX52YWZqxhHYIidilRIUXBFW\na5xm48L4yzXa9UWPShT1MahNkBtzt85zMon39NhvRzu0N3E0DeBOIQj4iJ+R\nDNmA35zLnUv3R9nqRuOtstmQHOuSEBffwvTRQ2cAtDMhrlM/3dzeDj9FxHl3\nm4JFN+zx1sJVlfkJuLpA+/99Rd2PDMAtGYe4PlOJDuMMrz7HD3NApm+RkH4w\nUI/xiMjRKWwlRe0Arb+3J3yXfFf1vaHf7ECzjuouyGKsl8FAHVSPtuDRGIe6\nFp9hDL9VCY3m0ZtqaKuEsx4o6qHiUnQUWksYxoY0a3U2JiutvFaxrPLgnqJU\n+NJxAQtpN/MvTdbEwh+a2mABtxspAtRn0NWPuYPevcHiXUrwB0trVkWvE2SI\nfRz+fNqFsop156Wl3peLgGU8Izpfvr2zuninQ7sJ+k4s1YB1Vqumv4UftNgx\naeCTtwk0GcqI38w/H6ysj24nhI2eIMkQdbs=\n=6Cgv\n-----END PGP MESSAGE-----\n",
      "otp": "-----BEGIN PGP MESSAGE-----\n\nwcBMAxtJWkepNe3rAQf/Vpeb90VYjuF0vOJSmwt3FaRyjOX9O13d9xswoOKP\nDaeRFn+B3vCq0HWN+hAzmWvB5Ehmp/v82vICWy6iUkl0z+/XT56ZXN+Em015\n9SulbgqoZ9nBwtUDiLawSxTNGq63z7+VwwC4wfY6IwFBIewrjGxh0lHNjHti\nwKbsFEVoqfFPQPzhhwuHuOkyO4MKU5SVzJfsUxyyjvX6O1bGt+ygzNfcmDyf\nX1O6s0ZW2l6KSMPdLHugo8TCWURzPZ6qqfaN8u4bctl2dvtPVqyCONNw5Nao\ndx/HMYNssmQIG9UO/+odLjVmcg96FQws42hP1tE9tJ30ROQKqCE71BNXI6KD\nGtI3AdrKHWvNMJyUUqd1gPaYfjAPUvpHejjBNwnP+nDy+kpxr9vdTkK2l3SR\nXW4XXLQxgz1iDDstug==\n=2LNw\n-----END PGP MESSAGE-----\n",
      "numeroCuenta": "-----BEGIN PGP MESSAGE-----\n\nwcBMAxtJWkepNe3rAQf+JusleRx9DpSknhWu8fuzmea9J+HVTD8ew8fC7HGI\nviZ9diwpYTKyUdrbFYwTVWgV/uLjxkgKA0gi+1cn0Xoqgxq04GFYmEWvK4RC\nOQ3Nqj/k8YHxCUbU6mKyhLe454KqaXhws2LBHNE6lflNfmS3vP7wh3UVOkPx\nOTj+MfSvIDoG40HNY2LDgTxM6exs0r2IqreaiAPbhKfLtaOP3jUFLnltydJv\nuQ9k2ux0Dk9wi99zVj7jPtej8wOCFQOSkNjcPuRoMp0KFxZShyteVmH/jk2D\nsdYO7vdgX8YOtzLdDGXRWqD/YP/m4aKb6NqLzhpzFk5MZUBlY2mzav1z7V5S\nmtI7AZmm6DA9W+tSYaNtycqU8/9Yy9ohdijbf253qBFFkX+R2kLH3m8Gslhg\ncYABwv9Cfn1mp6s7nQ+Lad0=\n=3y4T\n-----END PGP MESSAGE-----\n",
      "valor": "-----BEGIN PGP MESSAGE-----\n\nwcBMAxtJWkepNe3rAQf+LeZYXAYh5Oj9NsCwmFR4xyz2HzH7ByfpiZi2lLwE\n9OqUar6RNCwhjKB6KzWpoWqtoW5jVW2bHpMe5sWxWUtUrtRQI66W4Oho4cIS\nWJHwlDxeSey/InaFJvvIbhuw19xHY2f/e2buseSf979sbB10zyDP7X81RhXg\nipqvcDNbbkQKUYddGYm46AkEpL9MmHlsTkpMUQ3TCb1oElXVlh2yBsMXYM9h\nVwjZPhe3WuHGA8vweZynk5s0ShAK6lY/Jo3+uFdo5Wr9L/FVxySGDud3DS2w\nC1jp69qNvvZNtzFo2+SZ6QCgOLx5zOcyYZaFn7+Izwm9eqzWG9Jzt+CXB2gt\nqtI3AT2ha6fsZP4vV81H5y7Fd36QTTuSVlsUlLX6noThFc/8N1SwoS172Mqz\nND4UNJ0KH++Uh609AA==\n=uo63\n-----END PGP MESSAGE-----\n",
      "tipoTransaccion": "-----BEGIN PGP MESSAGE-----\n\nwcBMAxtJWkepNe3rAQgAi6ecTIqlHmtimH8CA0w/5lX7V38J/FwNiofizrv9\n+WBDI5z+x91VqzUU10G0H316q5AmUbBpCqoNI6WrPN2wZBAVR3/wh1H3bcLR\nd787/Yek2b3E8K5Hs2NQaUcFCg3TS3j/W3pjPqQqVJwNqj6uBL9YJMMsPFud\n98KHO6cfu/hs0B4IQx9wLXajQlMr6iW3tHAk7ADIgKpyE/C60/x3e1Au+vgL\nu2MCWHkjnoKmZ1+kvHXG5PwdwPxtmJ96k1HlvFNGesekAazjfHZevr3d5QH6\nvCFVOUOwFG5rLFSVFUhHlepAuwJpUjW8GO7i9ZiJdudcvhVSjWGSYd0XSxxY\nttIzAVq+zAodQ1lZyXE1F7U8t04z0vvS4bLI7gzzBlJ2wg81hVsvrmZfmNEY\nGHm5W1qVbdqX\n=nFIH\n-----END PGP MESSAGE-----\n",
      "fechaTransaccion": "-----BEGIN PGP MESSAGE-----\n\nwcBMAxtJWkepNe3rAQf/Q52xJTBh+Wotxo6A5TVRum/eL1Uo0W6ha3l7Q5vd\nUaZVIRMwJydi38UIxyWcH+UgKH7yqEWJAt76n+Y/I+GjR6ctRy6oHAh2adye\nRla2ylEg+wOmrE7XPGk3RiwLeb/YhzrzzfweVumxCeFb8RPJGEkUUbs3JLX+\nrCZsQhuG80zFWCY0SRQ3M8trl1+1yp/IjIwg3P92T5nNuSsBVNU85ayMZsj2\nNvpG+1Y9VA43ZOzsGeDA/b68XKMXQuMt1ghPniy39lsu1/3nqilAydkA6saY\nAUr5E0nBLSASXtbndKHfzHvOC+Qo4Dy3JlKu/MuxopLzdQaFptVDxeelcj5R\nb9JEAe6QvJLFJj9vUihoH56CVGToFtJSVwJxo5OllmYKQY9lmW+iM6ptiMd+\ndFVRIvAtySFzPRJPhwvuLcOlSvhUx004/jE=\n=6P9h\n-----END PGP MESSAGE-----\n",
      "origen": "-----BEGIN PGP MESSAGE-----\n\nwcBMAxtJWkepNe3rAQf/Rhwt8sN/XhUbNWGM8bNAFwpoFBygq+mNW2ZU4a3M\nfIOZLD9MjmL0AYkkTNZKGnx7qSQpcDwUvZKeSWnQJvNgLKy2QV4aNVWPkJcD\nh0O2G0Yk6/TS1ufZIRnTXmRyF7t6WendD+TOXfjm9mFTkMUHOp6v0OOwwEtr\nsngLZIi6KK4bbb9dugdHGDuEhQSdLyaSCYkGiEQx4FzZql8ZgZy1Izvw0h2s\nekZfYyI4UOeDbtj1hthhRPV9afLz+dgHPeQLxFuZbvYF4/nLs6cJx5noQNui\ngeHpbUtqh8W9JlADSmQCE6T7jgZqHvKy7G/QC1usKSvEkHcedgsDSv8qnjN1\nO9JKAdkAKXoIVyJfWDdi4zZlhgtkeOLwMflNpyS89PZlEpAg0UaCILRyg31C\nN+vS78vwbeAOP1Vfl/TcmnEBJXIg2UPoLNMXvE9WnTo=\n=oqhS\n-----END PGP MESSAGE-----\n"
    }
    return this.http.post('https://api-autorizador-estandar-util.dev.cobre.co/api/v1/comercio/autorizador', test, {
      headers: {
        'Authorization': 'F28958711A1194B816A82D6E7B86848B91DEA197B586F8DFC79BC4B6E7DC924B'
      }
    });
  }
}
