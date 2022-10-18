import LongCard from "../../components/LongCard";
import ListService from "../../utils/service/ListService";

const Index = () => {
  return (
    <div>
      <div className="pt-2 bg-gray">
        <h3 className="bg-gray">บริการของเรา</h3>
      </div>
      <div className="px-3">
        <h1 className="text-3xl text-main">หนังสือทั่วไป</h1>

        <div className="flex flex-between">{/* Search Section */}</div>
        <div className="bg-gray-100 px-4 py-2 rounded-[30px] my-10 mx-10">
          <h1 className="pl-4 pt-2">102 รายการ</h1>
          <div className="flex flex-col px-4 py-4 gap-2">
            {ListService.map((item, i) => {
              return (
                <LongCard
                  title={item.title}
                  description={item.sub}
                  price={200}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
