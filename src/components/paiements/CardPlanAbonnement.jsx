import Card from "@/components/paiements/Card";
export default function CardPlanAbonnement() {
    return (
        <div className=" flex flex-row gap-5  w-full flex-wrap">
            <Card

                title="Plan premium"
                typography1="Total Revenue"
                typography2="$552.6"
                typography3="10"
                color="#FC5C63"
            />
            <Card
                title="Plan advanced"
                typography1="Total Revenue"
                typography2="$580.6"
                typography3="5"
                color="#D2B106"
            />


            {/* Add more Card components with different props as needed */}
        </div>
    )
}
