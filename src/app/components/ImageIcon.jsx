import Stack from "./StackIcons"

export default function ImageIcon() {
    return(
        <div className="">
            <img className="
            // image size
            size-28 
            rounded-2xl /* Default for mobile (e.g., 192px x 192px) */
            ml-33 mt-10

            md:size-44 md:ml-40 md:mt-20         /* Adjust for md screens (768px+),             targets                                 iPad portrait */
                                                /* Using standard for spacing */
            lg:size-42 lg:ml-56 lg:mt-25         /* Adjust for lg screens (1024px+), targets iPad landscape and desktops */
                                                    /* Using standard mml-20 mmt-10 for spacing */

            xl:size-80 xl:ml-20 xl:mt-20         /* For larger desktops (1280px+) */
            2xl:size-3 6 2xl:ml-20 2xl:mt-20      /* For very large screens (1536px+) */

            /* If you still want very specific overrides for widths > 1200px (not iPad), keep these but adjust values */
            @min-[1200px]:size-90 @min-[1200px]:ml-35 @min-[1200px]:mt-30
            @min-[1400px]:size-50 @min-[1400px]:ml-100"
        src="https://github.com/Gusttav28.png"  
        alt="" />
         <div className="
                mt-35 -ml-138 

                md:mt-35 md:-ml-125                  /* For md screens (iPad portrait) */
                lg:mt-35 lg:-ml-110                  /* For lg screens (iPad landscape, desktops) */


                /* Container query overrides */
                2xl:-ml-60
                ">
                <Stack/>
        </div>
    </div>
    )
}