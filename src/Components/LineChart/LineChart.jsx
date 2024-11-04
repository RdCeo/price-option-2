import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const LineChart = () => {
  const mathMarksData = [
    {"name": "Alice", "math": 78, "physics": 82, "chemistry": 76},
    {"name": "Bob", "math": 85, "physics": 90, "chemistry": 88},
    {"name": "Charlie", "math": 90, "physics": 95, "chemistry": 92},
    {"name": "David", "math": 70, "physics": 75, "chemistry": 80},
    {"name": "Eva", "math": 88, "physics": 85, "chemistry": 91},
    {"name": "Frank", "math": 95, "physics": 92, "chemistry": 89},
    {"name": "Grace", "math": 80, "physics": 78, "chemistry": 85},
    {"name": "Helen", "math": 92, "physics": 88, "chemistry": 84},
    {"name": "Ian", "math": 75, "physics": 70, "chemistry": 76},
    {"name": "Jane", "math": 83, "physics": 87, "chemistry": 90}
  ];

  return (
    <div>
      <LChart width={500} height={400} data={mathMarksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="math" stroke="red" name="Math Marks" />
        <Line type="monotone" dataKey="physics" stroke="blue" name="Physics Marks" />
        <Line type="monotone" dataKey="chemistry" stroke="green" name="Chemistry Marks" />
      </LChart>
    </div>
  );
};

export default LineChart;

