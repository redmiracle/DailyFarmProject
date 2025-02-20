import {CardsSliceType} from "../../features/cardsSlice/CardsSlice.tsx";
import {useAppSelector} from "../../app/hooks.ts";

interface Props{
    type:keyof CardsSliceType,
}

const Cards = ({type}:Props) => {

      const cards=useAppSelector(state => state.cards[type]);

      return(
          <div>
              {cards.map(card=>{
                  return (
                      <div key={card.name}
                           className="relative h-50 object-cover border border-gray-400 rounded overflow-hidden shadow-lg mb-4 z-10 ">
                          <div className={"absolute w-full h-full p-4 "}>
                              <h2 className={"text-end text-3xl text-[#501414] "}>{card.saleValue}</h2>
                          </div>
                          <img src={card.src} alt={card.name} className="w-full h-full object-cover"/>

                          <div className="absolute top-0 right-0 bottom-0 left-0 flex items-end">
                              <div className={"bg-white opacity-80 w-full pb-2 ps-2"}>
                                  <h2>{card.name}</h2>
                                  <h2>{card.description}</h2>
                              </div>
                          </div>

                      </div>
                  )
                  }
              )}
          </div>
      )

};

export default Cards;