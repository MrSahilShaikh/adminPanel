import DepositTokens from "./layout/DepositTokens";
import MainLayout from "./layout/MainLayout";

//Todo:Reacter Router dom setup for routing.
//Mainlayout includes the layout having sidebar and responsive code for sidebar. It takes a children and render it.

function App() {
  return (
    <div className="h-full w-full">
      <MainLayout>
        <DepositTokens/>
      </MainLayout>
    </div>
  );
}

export default App;
