import Link from "next/link";
import Image from "next/image";
const members=()=>{
    return(
    <div className="bg-mainbg h-screen w-screen bg-cover flex items-center flex-col p-10">
        
    <h1 className="text-6xl text-center font-semibold font-[Arial]">
    Collaborators{" "}</h1>
    <div className="bg-white/75 text-gray-900 rounded-xl m-6 border p-6" >
    <h1 className="text-2xl bold text-black"><big><center> &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Developers &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</center></big></h1>
    &nbsp;&nbsp;
        <center className="text-xl italic">
        <h2>Shubham Kolaskar :
        <Link href="https://www.linkedin.com/in/shubham-kolaskar/" target="_blank">LinkedIn </Link>
            </h2> 
            {'\n'}
            <h2 > Akshat Adavakar  :
                <Link href="https://www.linkedin.com/in/akshat-adavadkar-290971231/"target="_blank">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Drashti Nagda :
                <Link href="https://www.linkedin.com/in/drashti-nagda-62589b215/"target="_blank">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Chirag Prajapati :
                <Link href="https://www.linkedin.com/in/chirag-prajapati-938033247/"target="_blank">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2>  Sahil Bhanushali :
                <Link href="https://www.linkedin.com/in/sahil-bhanushali-b80a59215/"target="_blank">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Deepranjan Bhosale :
                <Link href="https://www.linkedin.com/in/deepranjanbhosale/"target="_blank">LinkedIn</Link>
            </h2>
            {'\n'}
            </center>
        </div>
        <div className="bg-white/75 text-gray-900 rounded-xl m-6 border p-6">
            <h1 className="text-2xl bold text-black"><big> <center>Mentors</center></big></h1>
            <center className="text-xl italic">
            <h2 > Mentor CoE: Mr.Anjani Kumar :
            <Link href="https://www.linkedin.com/company/cyberpeacefoundation/"target="_blank ">   LinkedIn</Link>
            </h2>
            <h2 > Dr.Nilakshi Jain, HOD Cybersecurity Department,SAKEC :
                <Link href="https://www.linkedin.com/in/dr-nilakshi-jain-7593a264/"target="_blank">   LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Prof. Shwetambari Borade, Department of Cybersecurity,SAKEC :
                <Link href="https://www.linkedin.com/in/shwetambari-borade-a05a113b/"target="_blank">  LinkedIn</Link>
            </h2>
            {'\n'}
            </center>
            </div>
    </div>
    )
};
export default members; 
