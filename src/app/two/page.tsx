/*
#2 Assignment: Responsive Feature Section
Build a 3-column feature section using Flexbox and Grid.
📌 Goal: Learn Flexbox & Grid for responsive layouts.

📝 Requirements:
Container Size: Width: 100%, Max Width: 900px
Layout:
Desktop (≥1024px) → 3 equal-width feature cards in a row
Tablet (≥768px) → 2 cards per row
Mobile (<768px) → 1 card per row
Feature Card:
Width: 100%, Min Height: 180px
Background Color: White (#FFFFFF)
Border Radius: 8px
Shadow: Subtle (box-shadow: 2px 2px 10px rgba(0,0,0,0.1))
Padding: 20px
Text Alignment: Center
Title:
Font Size: xl
Font Weight: Bold
Color: Black (#1F2937)
Description:
Font Size: base
Color: Gray (#6B7280)

*/
const page = () => {
    return (
        <div className="container mx-auto px-4 w-full max-w-[900px]  h-full flex flex-col justify-center items-center">
            <div className="w-full">
                <h1 className="font-bold text-xl text-[#1F2937] ">Title</h1>
                <p className="text-[#6B7280]">Description</p>
            </div>

            <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="min-h-[180px] bg-white rounded-lg shadow-[2px_10px_10px_rgba(0,0,0,0.1)] p-5 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam beatae, iste doloremque, nemo vero asperiores earum
                    obcaecati quo delectus quia deserunt! Adipisci perspiciatis
                    vero libero molestias nostrum molestiae sed neque.
                </div>
                <div className="min-h-[180px] bg-white rounded-lg shadow-[2px_10px_10px_rgba(0,0,0,0.1)] p-5 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam beatae, iste doloremque, nemo vero asperiores earum
                    obcaecati quo delectus quia deserunt! Adipisci perspiciatis
                    vero libero molestias nostrum molestiae sed neque.
                </div>
                <div className="min-h-[180px] bg-white rounded-lg shadow-[2px_10px_10px_rgba(0,0,0,0.1)] p-5 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam beatae, iste doloremque, nemo vero asperiores earum
                    obcaecati quo delectus quia deserunt! Adipisci perspiciatis
                    vero libero molestias nostrum molestiae sed neque.
                </div>
                <div className="min-h-[180px] bg-white rounded-lg shadow-[2px_10px_10px_rgba(0,0,0,0.1)] p-5 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam beatae, iste doloremque, nemo vero asperiores earum
                    obcaecati quo delectus quia deserunt! Adipisci perspiciatis
                    vero libero molestias nostrum molestiae sed neque.
                </div>
                <div className="min-h-[180px] bg-white rounded-lg shadow-[2px_10px_10px_rgba(0,0,0,0.1)] p-5 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam beatae, iste doloremque, nemo vero asperiores earum
                    obcaecati quo delectus quia deserunt! Adipisci perspiciatis
                    vero libero molestias nostrum molestiae sed neque.
                </div>
                <div className="min-h-[180px] bg-white rounded-lg shadow-[2px_10px_10px_rgba(0,0,0,0.1)] p-5 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam beatae, iste doloremque, nemo vero asperiores earum
                    obcaecati quo delectus quia deserunt! Adipisci perspiciatis
                    vero libero molestias nostrum molestiae sed neque.
                </div>
            </div>
        </div>
    );
};

export default page;
