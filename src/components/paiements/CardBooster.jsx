import Card from "@/components/paiements/Card";
export default function CardBooster() {
    return (
        <div className=" flex flex-row gap-5
        w-full flex-wrap">
            <Card

                title="Pack1"
                typography1="Total Revenue"
                typography2="$552.6"
                typography3="10"
                color="#344054"
            />
            


            {/* Add more Card components with different props as needed */}
        </div>
    )
}
