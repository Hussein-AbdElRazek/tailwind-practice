const One = () => {
    /**
    Example description:
    Day 1 Assignment: Hero Section
    Create a simple hero section with a title, subtitle, and a button.
    📌 Goal: Learn setup, spacing, sizing, and utility classes by creating a simple hero section.

    📝 Requirements:
    Container Size: Width: 100%, Height: 80vh
    Background Color: Light Gray (#F3F4F6)
    Title:
    Font Size: 3xl
    Font Weight: Bold
    Color: Black (#1F2937)
    Subtitle:
    Font Size: lg
    Color: Gray (#6B7280)
    Button:
    Width: 150px, Height: 45px
    Background Color: Blue (#3B82F6)
    Text Color: White
    Rounded Corners: 6px
    Hover Effect: Darker Blue (#2563EB)
    Alignment:
    Center the content vertically and horizontally
     */
    return (
        <div className="w-full h-[80vh] bg-[#F3F4F6] flex justify-center items-center">
            <div className="">
                <h1 className="text-3xl font-bold text-black">Title</h1>
                <p className="text-lg text-[#6B7280]">Subtitle</p>
                <button className="w-[150px] h-[45px] bg-[#3B82F6] text-white rounded-md hover:bg-[#2563EB]">
                    Button
                </button>
            </div>
        </div>
    );
};

export default One;
