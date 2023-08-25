"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Link from 'next/link';
export default function Home() 
{
  const [data, setData] = useState("");
  const [dnsData, setDNSData] = useState("");
  const [sData, setSData] = useState("");
  const [domain, setWhoIs] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [ipAddress2, setIpAddress2] = useState("");
  const callIPAPI = async () => {
    try {
      const res = await axios.get(`http://ip-api.com/json/${ipAddress}`, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const callDNSAPI = async () => {
    try {
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
      const res = await axios.get(
        `https://api.shodan.io/shodan/host/${ipAddress2}?key=5lildZw4j7Dl5gr1zk9QioWfmlJovQ7v`,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res.data);
      setSData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-mainbg h-screen w-screen bg-cover flex items-center flex-col p-10">
      <h1 className="text-6xl text-center font-semibold font-[Arial]">
        Recon DNS & IP{" "}
      </h1>
      <div>
        {" "}
        <big>Handy tool for quick Shodan Reconissance , IP Geolocation and whois
        protocol Lookup.</big>{" "}
      </div>
      <div>
        <br/>
        <Image src="/logo.jpg" width="270" height="250"/>
      </div> 
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
        {data && (
          <div className="bg-white/75 text-gray-900 rounded-xl m-6 border p-6">
            <h1 className="text-2xl bold text-black">Geolocation Info</h1>
            <h1 className="text-xl bold text-gray-900">
              <span>Status: {data.status}</span>
            </h1>
            <h2 className="text-xl bold text-gray-900">
              <span>Region: {data.country}</span>,&nbsp;
              <span>{data.regionName}</span>,&nbsp;<span>{data.city}</span>
              ,&nbsp;<span>{data.zip}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Coordinates: ({data.lat}</span>,&nbsp;
              <span>{data.lon}</span>)
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>ISP: {data.isp}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>ORG: {data.org}</span>
            </h2>
          </div>
        )}
        {dnsData && (
          <div className="bg-white/75 text-gray-900 rounded-xl m-6 border p-6">
            <h1 className="text-2xl bold text-black">WHOIS Info</h1>
            <h1 className="text-xl bold text-gray-900">
              <span>Registrar: {dnsData.registrar}</span>
            </h1>
            <h2 className="text-xl bold text-gray-900">
              <span>WHOIS Server: {dnsData["whois_server"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>
                Last Update: {new Date(dnsData["updated_date"]).toString()}
              </span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>
                Creation Date: {new Date(dnsData["creation_date"]).toString()}
              </span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>
                Expiration Date:{" "}
                {new Date(dnsData["expiration_date"]).toString()}
              </span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>DNS SEC: {dnsData.dnssec}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Organization: {dnsData.org}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>State: {dnsData.state}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Country: {dnsData.country}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Servers: {dnsData["name_servers"].join(", ")}</span>
            </h2>
            {dnsData["emails"] && (
              <h2 className="text-xl bold text-gray-900">
                <span>
                  Emails:{" "}
                  {Array.isArray(dnsData["emails"])
                    ? dnsData["emails"].join(", ")
                    : dnsData["emails"]
                  }
                </span>
              </h2>
            )}
          </div>
        )}
        {sData && (
          <div className="bg-white/75 text-gray-900 rounded-xl m-6 border p-6">
            <h1 className="text-2xl bold text-black">Shodan Info</h1>
            <h2 className="text-xl bold text-gray-900">
              <span>Region Code: {sData["region_code"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>IP: {sData["ip"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Postal Code: {sData["postal_code"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Country Code: {sData["country_code"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>City: {sData["city"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>
                Coordinates: ({sData["latitude"]}, {sData["longitude"]})
              </span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>ASN: {sData["asn"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>ISP: {sData["isp"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span> Transport Protocol: {sData["transport"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Ip Str: {sData["ip_str"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Domains: {sData["domains"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>OS: {sData["os"]}</span>
            </h2>
            <h2 className="text-xl bold text-gray-900">
              <span>Open Ports: {sData["ports"].join(", ")}</span>
            </h2>
          </div>
        )}
      </div>
      <div>
<button className="bg-green-400 p-2 rounded"> <center><Link href="/Collaborators">Developer's Corner</Link>&nbsp;&nbsp;</center></button>
{" "}
<button className="bg-green-400 p-2 rounded"> <center><Link href='/HowitWorks'>How It Works</Link> &nbsp;&nbsp;</center></button>
      </div>
    </div>
  );
}
