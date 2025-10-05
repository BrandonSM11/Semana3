import { Cardd } from "@/components/card/Card";
import { useEffect, useState } from "react";
import { Buttonnn } from "@/components/button/Button";
import { Badgeee } from "@/components/badge/Badge";
import { FiAlertTriangle } from 'react-icons/fi';


export default function Home() {

  const [loader, setLoader] = useState<{ [key: number]: boolean }>({});
  const [disabledd, setDisabled] = useState<{ [key: number]: boolean }>({});



  const handlerClick = (id: number) => {
    setLoader((prev) => ({ ...prev, [id]: true }));
    setDisabled((prev) => ({ ...prev, [id]: true }));

    setTimeout(() => {
      setLoader((prev) => ({ ...prev, [id]: false }));
      setDisabled((prev) => ({ ...prev, [id]: false }));
    }, 3000);
  };

  const cards = [
    {
      id: 1,
      title: "Search engine",
      subtitle: "optimization",
      imageUrl: "/image/imagen.png",
      type: "green",
    },
    {
      id: 2,
      title: "Search engine",
      subtitle: "optimization",
      imageUrl: "/image/imagen.png",
      type: "black",
    },
    {
      id: 3,
      title: "Search engine",
      subtitle: "optimization",
      imageUrl: "/image/imagen.png",
      type: "white",
    },
    {
      id: 4,
      title: "Search engine",
      subtitle: "optimization",
      imageUrl: "/image/imagen.png",
      type: "green",
    },
  ] as const;

  



  return (
  <div className="p-6 flex flex-col gap-14 w-full justify-center">
    {/* Cards */}
    <div className="flex flex-wrap gap-14 w-full justify-center">
      {cards.map((card) => (
        <div key={card.id}>
          <Cardd
            title={card.title}
            subtitle={card.subtitle}
            imageUrl={card.imageUrl}
            type={card.type}
            footer={
              <div className="flex justify-center gap-2">
                <Badgeee label="CUIDADO" icon={<FiAlertTriangle />} />
                <Buttonnn
                  size="lg"
                  disabled={disabledd[card.id] || false}
                  loading={loader[card.id] || false}
                  click={() => handlerClick(card.id)}
                  text="ENTER"
                />
              </div>
            }
          />
         
        </div>
      ))}
    </div>
      
  </div>
)};

