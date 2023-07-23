'use client'

import Image from "next/image";
import { useState } from "react";
//localhost
export default function Home() {
  
  const [data, setData] = useState('')
  const [domain, setWhoIs] = useState('')
  const [ipAddress, setIpAddress] = useState('')
  
/* const callIPAPI = async (ipAddress) => {
    try {
      const res = await fetch(
        `https://api.ipgeolocation.io/getip${ipAddress}`,
        {
          method: "GET",
          redirect: "follow",
          headers: { apikey: "3780fd1ec4f84724a33db4438e3a2097" },
        }
      );
      const apiData = await res.json();
      console.log(ipAddress);
      setData(ipAddress)
      console.log(ipAddress)
      return apiData;
    } catch (err) {
      console.log(err);
    }
  };*/

  /*const callDNSAPI = async () => {
    try {
      const res = await fetch(
        `https://api.apilayer.com/whois/query?domain=${domain}`,
        {
          method: "GET",
          redirect: "follow",
          headers: { apikey: "5MgKoU8sDEfs1bIGOVj4FSdcAASuzQIr" },
        }
      );
      const apiData = await res.json();
      setData(apiData)
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };*/


  const SHODANAPI = async (ipAddress) => {
    try {
      const res = await fetch(`https://api.shodan.io=${ipAddress}`, {
        method: "GET",
        redirect: "follow",
        headers: {
          apikey: "5lildZw4j7Dl5gr1zk9QioWfmlJovQ7v",
        },
      });
      const data = await res.json();
      console.log(data);
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
          <button className="bg-blue-400 p-2 rounded"
          onClick={()=>{callDNSAPI()}}>Whois-Lookup</button>
        </div>
        <div>
          <input
            type="text"
            name="geolocation"
            id=""
            placeholder="192.168.0.1"
            className=" m-3 p-2 outline rounded mt-4"
            method="post"
            onChange={(e)=> callIPAPI(e.target.value)}
          />{" "}
          <button className="bg-blue-400 p-2 rounded" onClick={()=>{callIPAPI()}}>
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
            onChange={(e)=> SHODANAPI(e.target.value)}
          />{" "}
          <button className="bg-blue-400 p-2 rounded" type="Submit"  onClick={()=>{SHODANAPI()}}>
            {" "}
            Shodan Search
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <h1>{data.city}</h1>
        <h1>{data.lat}</h1>
        <h1>{data.lon}</h1>
      </div>
    </div>
  );
}
