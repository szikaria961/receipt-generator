
const App = () => {
  const handlPrint = () => {
    window.print();
  }
  return (
    <>
      <main className="m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow">
        <header className="flex flex-col items-center jutify-center mb-5">
          <div className="font-bold text-4xl mb-3">Receipt Generator</div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button className="btn btn-print p-2" onClick={handlPrint}>Print</button>
              </li>
              <li>
                <button className="btn btn-download p-2">Download</button>
              </li>
            </ul>
          </div>
        </header>
        {/* Customers Info*/}
        <section className="flex flex-col items-end justify-end">
            <h2>Customers Name</h2>
            <p>Order Number</p>
            <p>Date Order Placed</p>
        </section>
        {/* Product Info will store in some table*/}
        <section>
            <h2>Product Name</h2>
            <p>Quantity</p>
        </section>
        <footer>
          <ul>
            <li>Business Name</li>
            <li>Business email</li>
            <li>Social Media Handle</li>
          </ul>
        </footer>
      </main>
    </>
  );
}

export default App;
