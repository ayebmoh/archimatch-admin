import CardPlanAbonnement from "@/components/paiements/CardPlanAbonnement"
import CardPack from "@/components/paiements/CardPack";
import CardBooster from "@/components/paiements/CardBooster";
export default function CA() {
    return (
        <div className="">
            <div>
                <h2 className="text-[#263238] text-lg font-bold mt-4"> Plans d’abonnement</h2>
                <CardPlanAbonnement />

            </div>
            <div>
                <h2 className="text-[#263238] text-lg font-bold mt-6"> Packs jetons</h2>
                <CardPack />

            </div>
            <div>
                <h2 className="text-[#263238] text-lg font-bold mt-6"> Packs Booster</h2>
                <CardBooster />

            </div>















        </div>

    )
}


