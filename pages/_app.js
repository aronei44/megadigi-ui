import '../styles/globals.css'
import Head from "next/head";
import Script from "next/script"
import { UserContext, UserProvider } from '../context';
import callAPI from '../config/api';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous" 
        />
        <title>Megamendung Digital</title>
        <meta name="description" content="Platform Digital Desa Megamendung" />
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        
      </Head>
        
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"/>
        <UserProvider>
          <UserContext.Consumer>
            {value=>{
              const getUser = async ()  => {
                if(!value.user.id){
                  const {data, status} = await callAPI({
                    path: '/user',
                    method: 'GET',
                    token: localStorage.getItem('token')
                  })
                  if(status === 200){
                    value.setUser(data.data)
                  }
                }
              }
              if(typeof window !== "undefined" && localStorage.getItem('token')){
                getUser()
              }
              return <Component {...pageProps} />
            }}
          </UserContext.Consumer>
        </UserProvider>
    </>
  );
}

export default MyApp
