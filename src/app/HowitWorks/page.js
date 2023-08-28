import Link from "next/link";
const about=()=>{
    return(
    <div className="bg-mainbg h-screen w-screen bg-cover flex items-center flex-col p-10">
    <h1 className="text-6xl text-center font-semibold font-[Arial]">
    How It Works!{" "}</h1>
    <div className="bg-white/75 text-gray-900 rounded-xl m-6 border p-6">
        <h2>
        <center><big> <ul>Whois Lookup</ul></big></center>     
    A "Whois" lookup is a way to query a public database that contains information about domain registrations.
    It provides information about the domain's ownership, registration and expiration dates, nameservers, and contact details for the domain owner.
    This lookup is commonly used to identify the registered owner of a domain and gather administrative and technical contact information.
        </h2>
        <h2>
        <center><big> <ul>Use cases</ul></big></center>
Researchers, cybersecurity professionals, and businesses use Whois lookups to gather information about domains, including their ownership history and contact details.
Legal and Law Enforcement: Whois information can be used for legal and law enforcement purposes to identify the responsible parties behind a website.
Domain Transfer: During domain transfer processes, Whois lookup can help verify ownership and registration details.
Remember that with the introduction of data protection regulations like GDPR, the amount of personal information displayed in Whois records has been reduced in many cases to enhance privacy and security.
        </h2>
        <h2>
    <center><big> <ul>DNS (Domain Name System)</ul></big></center>     
The Domain Name System (DNS) is a decentralized naming system that translates human-readable domain names (like www.example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other on a network.
It acts like a phone book for the internet, allowing users to access websites using easy-to-remember domain names rather than numerical IP addresses.
        </h2>
        <h2>
            <center><big><ul>Use Cases</ul></big></center>
DNS is fundamental to the internet's functionality, ensuring that users can access websites by typing in easy-to-remember domainnames.
DNS also plays a role in email delivery, as it helps route emails to their correct destinations.
DNS is a critical component of the internet infrastructure, enabling seamless navigation and communication between devices across the global network.
        </h2>
        <h2>
        <center><big><ul>Shodan</ul></big></center>
Shodan is a search engine designed to help users discover and explore devices connected to the internet.
Unlike traditional search engines that index web content, Shodan indexes information about devices, including servers, routers, webcams, printers, IoT devices, and more.
Shodan allows users to search for specific devices based on various criteria, such as open ports, services running, geographic location, and vulnerabilities.
        </h2>
        <h2>
            <center><big><ul>Use Cases</ul></big></center>
Cybersecurity Research: Shodan is used by cybersecurity professionals to identify vulnerable devices and assess potential risks in their network.
IoT Device Monitoring: Shodan can help researchers and organizations monitor the security of IoT devices connected to the internet.
Network Management: System administrators can use Shodan to detect exposed services and open ports in their network that might be unintended entry points for attackers.
Shodan's capabilities have both positive and negative implications. While it provides valuable insights for researchers and security professionals, it can also expose poorly secured devices to potential malicious actors. As a result, responsible usage and ethical considerations are important when using Shodan for any purpose.
        </h2>
    </div>
    </div>
    );
}
export default about;