import Link from "next/link";
const members=()=>{
    return(
    <div className="bg-mainbg h-screen w-screen bg-cover flex items-center flex-col p-10">
    <h1 className="text-6xl text-center font-semibold font-[Arial]">
    Collaborators{" "}</h1>
    <div className="bg-white/75 text-gray-900 rounded-xl m-6 border p-6">
            <h1 className="text-2xl bold text-black"><big><center>Developers</center></big></h1>
            <h2 > Shubham Kolaskar :
                <Link href="https://www.linkedin.com/in/shubham-kolaskar/">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Akshat Adavakar  :
                <Link href="https://www.linkedin.com/in/akshat-adavadkar-290971231/">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Drashti Nagda :
                <Link href="https://www.linkedin.com/in/drashti-nagda-62589b215/">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Chirag Prajapati :
                <Link href="https://www.linkedin.com/in/chirag-prajapati-938033247/">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2>  Sahil Bhanushali :
                <Link href="https://www.linkedin.com/in/sahil-bhanushali-b80a59215/">LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Deepranjan Bhosale :
                <Link href="https://www.linkedin.com/in/deepranjanbhosale/">LinkedIn</Link>
            </h2>
            {'\n'}
        </div>
        <div className="bg-white/75 text-gray-900 rounded-xl m-6 border p-6">
            <h1 className="text-2xl bold text-black"><big> <center>Mentors</center></big></h1>
            <h2 > Prof.Neelakshi Jain, HOD Cybersecurity Department,SAKEC :
                <Link href="https://www.linkedin.com/in/dr-nilakshi-jain-7593a264/"> LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Prof. Shwetambari Borade, Department of Cybersecurity,SAKEC :
                <Link href="https://www.linkedin.com/in/shwetambari-borade-a05a113b/"> LinkedIn</Link>
            </h2>
            {'\n'}
            <h2 > Mentor CoE: Mr.Rohit Anjani :
                <Link href=""> LinkedIn</Link>
            </h2>
            </div>
    </div>
    )
};

export default members; 
