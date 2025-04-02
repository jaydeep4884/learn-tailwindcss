import React from "react";

function Backgrounds() {
  return (
    <div>
      {/* BG-ATTACHMENT : fixed,scroll */}
      {/* <div className="bg-scroll  bg-[url('https://images.unsplash.com/photo-1741837240475-2af9fd9e0918?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          tenetur at numquam corrupti quidem fugit neque voluptatum,
          exercitationem fugiat, sunt vitae saepe inventore iste alias aliquam
          magni laudantium modi. Illum. Quo ad velit sit amet alias quisquam
          magni ipsam explicabo atque saepe inventore, libero nemo voluptate
          similique, eos quod natus cupiditate pariatur laborum? Quos quis
          consequuntur tenetur et omnis nihil! Quaerat laborum aspernatur
          explicabo aut, iure asperiores. Delectus reprehenderit natus corrupti,
          officiis fuga consequatur neque illum harum temporibus ratione
          laudantium repellendus maiores adipisci odio, tempore totam quas
          similique assumenda veniam! Quis fugiat, sed amet culpa laudantium
          voluptatibus, vero dicta nisi non commodi a obcaecati. Consequuntur,
          voluptatum cum illo quidem dolorum corporis aliquam libero suscipit
          doloremque nesciunt inventore maiores officiis earum. Perspiciatis
          explicabo placeat aperiam quam distinctio minima aut voluptatem enim
          quos id assumenda sequi quas corporis similique voluptatibus nam,
          reprehenderit nisi amet eum at omnis ducimus est dolorem alias. Alias!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          tenetur at numquam corrupti quidem fugit neque voluptatum,
          exercitationem fugiat, sunt vitae saepe inventore iste alias aliquam
          magni laudantium modi. Illum. Quo ad velit sit amet alias quisquam
          magni ipsam explicabo atque saepe inventore, libero nemo voluptate
          similique, eos quod natus cupiditate pariatur laborum? Quos quis
          consequuntur tenetur et omnis nihil! Quaerat laborum aspernatur
          explicabo aut, iure asperiores. Delectus reprehenderit natus corrupti,
          officiis fuga consequatur neque illum harum temporibus ratione
          laudantium repellendus maiores adipisci odio, tempore totam quas
          similique assumenda veniam! Quis fugiat, sed amet culpa laudantium
          voluptatibus, vero dicta nisi non commodi a obcaecati. Consequuntur,
          voluptatum cum illo quidem dolorum corporis aliquam libero suscipit
          doloremque nesciunt inventore maiores officiis earum. Perspiciatis
          explicabo placeat aperiam quam distinctio minima aut voluptatem enim
          quos id assumenda sequi quas corporis similique voluptatibus nam,
          reprehenderit nisi amet eum at omnis ducimus est dolorem alias. Alias!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
          tenetur at numquam corrupti quidem fugit neque voluptatum,
          exercitationem fugiat, sunt vitae saepe inventore iste alias aliquam
          magni laudantium modi. Illum. Quo ad velit sit amet alias quisquam
          magni ipsam explicabo atque saepe inventore, libero nemo voluptate
          similique, eos quod natus cupiditate pariatur laborum? Quos quis
          consequuntur tenetur et omnis nihil! Quaerat laborum aspernatur
          explicabo aut, iure asperiores. Delectus reprehenderit natus corrupti,
          officiis fuga consequatur neque illum harum temporibus ratione
          laudantium repellendus maiores adipisci odio, tempore totam quas
          similique assumenda veniam! Quis fugiat, sed amet culpa laudantium
          voluptatibus, vero dicta nisi non commodi a obcaecati. Consequuntur,
          voluptatum cum illo quidem dolorum corporis aliquam libero suscipit
          doloremque nesciunt inventore maiores officiis earum. Perspiciatis
          explicabo placeat aperiam quam distinctio minima aut voluptatem enim
          quos id assumenda sequi quas corporis similique voluptatibus nam,
          reprehenderit nisi amet eum at omnis ducimus est dolorem alias. Alias!
        </p>
      </div> */}

      {/* BG-COLOR  */}
      {/* <button className="py-3 px-4 m-5 bg-sky-500 rounded-lg hover:bg-purple-600">
        Submit
      </button> */}

      {/* BG-SIZE : cover, contain  */}
      {/* <div>
        <img
          className="h-48 w-96 object-cover "
          src="https://images.unsplash.com/photo-1741837240475-2af9fd9e0918?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div> */}

      {/* Border , BorderRadius  */}
      {/* <div className="border border-indigo-700 size-32 bg-sky-600 m-5 rounded-md"></div>
      <div className="border-2 border-black size-32 bg-pink-600 m-5 rounded-tl-md"></div>
      <div className="border-4 border-black  size-32 bg-purple-600 m-5 rounded-full"></div> */}

      {/* Box Shadow  */}
      <div className="flex gap-5 m-5">
        <div className="shadow-2xs size-32  rounded-md">BoxShadow 2xs</div>
        <div className="shadow-xs size-32  rounded-md">BoxShadow xs</div>
        <div className="shadow-sm size-32  rounded-md">BoxShadow sm</div>
        <div className="shadow-md size-32  rounded-md">BoxShadow md</div>
        <div className="shadow-lg size-32  rounded-md">BoxShadow lg</div>
        <div className="shadow-xl size-32  rounded-md">BoxShadow xl</div>
        <div className="shadow-2xl size-32  rounded-md">BoxShadow 2xl</div>
      </div>
    </div>
  );
}

export default Backgrounds;
