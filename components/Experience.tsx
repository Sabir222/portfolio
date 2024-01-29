import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ExperienceProps = {};

const data = [
  {
    year: "2023 - present",
    company: "-",
    position: "Software Engineer Student",
  },
  {
    year: "2019 - 2023",
    company: "CIH BANK",
    position: "Financial Operations Coordinator",
  },
  {
    year: "2017",
    company: "MOGADOR Accounting",
    position: "Accountant intern",
  },
];

const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <section className="container my-40">
      <h1 className="text-3xl font-semibold mb-8">Experience</h1>
      <Table>
        <TableHeader className="justify-between text-2xl font-semibold ">
          <TableRow>
            <TableHead>Years</TableHead>
            <TableHead className="text-center">Company</TableHead>
            <TableHead className="text-right">Position</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>{data.year}</TableCell>
                <TableCell className="text-center whitespace-nowrap">
                  {data.company}
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  {data.position}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
};

export default Experience;
