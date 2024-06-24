import Card from "@/components/paiements/Card";
export default function CardPack() {
    return (
        <div className=" flex flex-row gap-5  w-full flex-wrap">
            <Card

                title="Pack1"
                typography1="Total Revenue"
                typography2="$552.6"
                typography3="10"
                color="#FC5C63"
            />
            <Card
                title="Pack2"
                typography1="Total Revenue"
                typography2="$580.6"
                typography3="5"
                color="#FC5C63"
            />
             <Card
                title="Pack2"
                typography1="Total Revenue"
                typography2="$580.6"
                typography3="5"
                color="#FC5C63"
            />
             <Card
                title="Pack2"
                typography1="Total Revenue"
                typography2="$580.6"
                typography3="5"
                color="#FC5C63"
            />
             <Card
                title="Pack2"
                typography1="Total Revenue"
                typography2="$580.6"
                typography3="5"
                color="#FC5C63"
            />


            {/* Add more Card components with different props as needed */}
        </div>
    )
}
