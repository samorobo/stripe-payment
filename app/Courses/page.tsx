import Link from "next/link";
import GridOne from "../components/GridOne";
import GridTwo from "../components/GridTwo";
import GridThree from "../components/GridThree";



export default function DealsOfTheDay() {
    return (
        <section className="py-12 bg-white">
            <GridOne />
            <GridTwo />
            <GridThree />
        </section>
    );
}
