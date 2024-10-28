import { LineChart as LC, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

const mathMarks = [
    { "id": 1, "name": "Arif", "physics": 68, "chemistry": 72, "math": 75 },
    { "id": 2, "name": "Bithi", "physics": 74, "chemistry": 79, "math": 82 },
    { "id": 3, "name": "Chanchal", "physics": 60, "chemistry": 67, "math": 65 },
    { "id": 4, "name": "Dipu", "physics": 88, "chemistry": 85, "math": 90 },
    { "id": 5, "name": "Esha", "physics": 85, "chemistry": 90, "math": 88 },
    { "id": 6, "name": "Farhan", "physics": 72, "chemistry": 68, "math": 70 },
    { "id": 7, "name": "Gopal", "physics": 80, "chemistry": 84, "math": 85 },
    { "id": 8, "name": "Hira", "physics": 76, "chemistry": 73, "math": 78 },
    { "id": 9, "name": "Isha", "physics": 92, "chemistry": 89, "math": 92 },
    { "id": 10, "name": "Joni", "physics": 78, "chemistry": 80, "math": 80 }
  ];
  
  
  

    return (
        <div>
            <LC width={500} height={400} data={mathMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey=""></YAxis>
               <Line dataKey="math" stroke="red"></Line> 
               <Line dataKey="physics" stroke="yellow"></Line>
               <Line dataKey="chemistry"></Line>
            </LC>
        </div>
    );
};

export default LineChart;