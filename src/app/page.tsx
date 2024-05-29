import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { 
  Button, 
  buttonVariants 
} from "@/components/ui/button";
import { BookCheck, Footprints, LucideHardHat, ShieldPlus, Swords } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
{
  name: "F",
  Icon: BookCheck,
  description: "Firm foundation for the word of God.",
},
{
  name: "A",
  Icon: ShieldPlus,
  description: "Active devotional life.",
},
{
  name: "I",
  Icon: Footprints,
  description: "Involvement in God's community.",
},
{
  name: "T",
  Icon: Swords,
  description: "Transformed life.",
},
{
  name: "H",
  Icon: LucideHardHat,
  description: "Heart for mission and outreach.",
},
]

export default function Home() {
  return (
<>
<MaxWidthWrapper>
    <div
    className="py-20 mx-auto text-center flex flex-col items-center max-W-3xl">
      <p 
      className="mt-6 text-lg max-w-prose text-muted-foreground">
        Welcome to
        </p>  
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        <span 
        className=
        "text-orange-600">
          Faith Ministry Chapel, Limuru
          </span>
          .
          </h1>
           <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Your most comfortable {' '}
        <span 
        className=
        "text-blue-600">
           home of worship
        </span>
        .
      </h2>
      <p className="mt-6 text-lg max-w-prose font-bold text-muted-foreground">
       <span 
       className=
       "text-green-500 font-bold">
        THEME OF THE YEAR: 
       </span>
       </p>
       <p className="mt-3 font-semibold text-lg">
       Discipleship (2 Timothy 2:2)
      </p>
      <p className="mt-5">
        You have heard me teach many things that have been confirmed by many reliable witnesses. 
        Now teach these truths to other trustworthy people who will be able to pass them on to others.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href="/Programs" className={buttonVariants()}>Discipleship Programs</Link>
        <Button variant="ghost">Our mission Statement &rarr;</Button>
      </div>
      <p className="mt-6 text-lg max-w-prose font-bold text-muted-foreground">
       <span 
       className=
       "text-green-500 font-bold">
        WEEKLY SWORD: 
       </span>
       </p>
       <p className="mt-3 font-semibold text-lg">
      MATTHEW 28:18-20
      </p>
      <p className="mt-5">
        And Jesus came and said to them, "All authority 
        in heaven and on earth has been given to me. Go 
        therefore and make disciples of all nations, baptizing 
        them in the name of the Father and of the Son and of the Holyspirit..."
      </p>
    </div>

    {/* TODO: List Programs */}
  </MaxWidthWrapper>

   <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 lg:gap-x-8 lg:gap-y-12">
        {perks.map((perk) => (
          <div 
          key={perk.name} 
          className="text-center md:flex md:items-start md:text-left lg:flex lg:items-center lg:align-middle lg:space-x-16">
            <div className="flex justify-center items-center space-x-20">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                {<perk.Icon className="w-1/3 h-1/3" />}
              </div>
            </div>

            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-0 lg:flex lg:items-center lg:space-x-16 lg:align-middle lg:justify-center">
              <h3 className="text-base font-medium text-gray-900">
                {perk.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground lg:mt-0">
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </MaxWidthWrapper>
   </section>
   </>
  )
}
