'use client'
import Image from "next/image";
import { useState } from "react";
import axios from "axios"
//localhost
export default function Home() {
  
  const [data, setData] = useState('')
  const [dnsData, setDNSData] = useState('')
  const [sData, setSData] = useState('')
  
  const [domain, setWhoIs] = useState('')
  
  const [ipAddress, setIpAddress] = useState('')
  const [ipAddress2, setIpAddress2] = useState('')
  
const callIPAPI = async () => {
    try {

      const res = await axios.get(`http://ip-api.com/json/${ipAddress}`, {
        headers:{ 'Content-Type': "application/json" }
      })
      console.log(res.data);
      setData(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  const callDNSAPI = async () => {
    try {
      // const res = await fetch(
      //   `https://api.apilayer.com/whois/query?domain=${domain}`,
      //   {
      //     method: "GET",
      //     redirect: "follow",
      //     headers: { apikey: "5MgKoU8sDEfs1bIGOVj4FSdcAASuzQIr",'Content-Type': "application/json" },
      //   }
      // );
      const res = await axios.get(`https://api.api-ninjas.com/v1/whois?domain=${domain}`, {
        headers:{  'X-Api-Key': "eIiQsW9DwQ8qFjm4GsqDJw==YYIJ3iyKpZJshCS0",'Content-Type': "application/json" }
      })
      setDNSData(res.data)
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };


  const SHODANAPI = async () => {
    try {
      // const res = await fetch(`https://api.shodan.io/shodan/host/${ipAddress2}`, {
      //   method: "GET",
      //   redirect: "follow",
      //   headers: {
      //     apikey: "5lildZw4j7Dl5gr1zk9QioWfmlJovQ7v",
      //     'Content-Type': "application/json"
      //   },
      // });
      const res = await axios.get(`https://api.shodan.io/shodan/host/${ipAddress2}?key=5lildZw4j7Dl5gr1zk9QioWfmlJovQ7v`, {
        headers:{'Content-Type': "application/json" }
      })
      console.log(res.data);
      setSData(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="bg-mainbg h-screen w-screen bg-cover flex items-center flex-col p-10">
      <h1 className="text-6xl text-center font-semibold font-[Arial]">
        Recon DNS & IP{" "}
      </h1>
      <header>
        {" "}
        Handy tool for quick Shodan Reconissance , IP Geolocation and whois
        protocol Lookup{" "}
      </header>
      <div className=" rounded-[8px] p-10 mt-9">
        <div>
          {" "}
          <input
            type="text"
            name="whoislookup"
            id=""
            placeholder="google.com"
            className=" m-3 p-2 outline rounded"
            method="post"
            onChange={(e) => setWhoIs(e.target.value)}
          />{" "}
          <button
            className="bg-blue-400 p-2 rounded"
            onClick={() => {
              callDNSAPI();
            }}
          >
            Whois-Lookup
          </button>
        </div>
        <div>
          <input
            type="text"
            name="geolocation"
            id=""
            placeholder="192.168.0.1"
            className=" m-3 p-2 outline rounded mt-4"
            method="post"
            onChange={(e) => setIpAddress(e.target.value)}
          />{" "}
          <button
            className="bg-blue-400 p-2 rounded"
            onClick={() => {
              callIPAPI();
            }}
          >
            Geolocation Search
          </button>
        </div>
        <div>
          {" "}
          <input
            type="text"
            name="shodan"
            id=""
            placeholder="192.168.0.1"
            className=" m-3 p-2 outline rounded"
            method="post"
            onChange={(e) => setIpAddress2(e.target.value)}
          />{" "}
          <button
            className="bg-blue-400 p-2 rounded"
            type="Submit"
            onClick={() => {
              SHODANAPI();
            }}
          >
            {" "}
            Shodan Search
          </button>
        </div>
      </div>
      <div className="flex flex-col w-screen">
        <pre className="bg-black/75 text-green-500 rounded-xl mt-4">{JSON.stringify(data, 0, 2)}</pre>
        <pre className="bg-black/75 text-green-500 rounded-xl mt-4">{JSON.stringify(dnsData, 0, 2)}</pre>
        <pre className="bg-black/75 text-green-500 rounded-xl mt-4 whitespace-normal overflow-scroll">{JSON.stringify(sData, 0, 2)}</pre>
      </div>
    </div>
  );
}
