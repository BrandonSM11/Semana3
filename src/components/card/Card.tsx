interface PropsCard {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  type: "green" | "white" | "black" ;
  footer?: React.ReactNode;

}

export const Cardd = ({ title, subtitle, imageUrl, type, footer }: PropsCard) => {
  
    const colorType = {
        green: "components__card--green",
        white: "components__card--white",
        black: "components__card--black",
    };

  return (
    <div
      className={`Card flex justify-between items-center w-140 h-70 p-6 rounded-4xl border-1 border-b-4 ${colorType[type]}`}
    >    <div className="Left w-56 h-64 flex flex-col justify-between">
        <div className="Top p-4">
          <h1 className="title text-3xl font-normal rounded inline-block bg-inherit">
            {title}
          </h1>
          {subtitle && (
            <h2 className="subtitle text-3xl font-normal rounded-md inline-block bg-inherit">
              {subtitle}
            </h2>
          )}
        </div>
        {footer && 
            <div className="Bot p-6">{footer}</div>}
      </div>

      {imageUrl && (
        <div className="Right">
          <img
            className="image w-50 h-40 rounded-xl flex items-center justify-center"
            src={imageUrl}
            alt={title}
          />
        </div>
      )}

    </div>
  );
};
