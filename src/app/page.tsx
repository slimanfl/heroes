import React from "react";
import { DEMO_POSTS } from "@/data/posts";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHero from "./(server-components)/SectionHero";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionMagazine5 from "@/components/SectionMagazine5";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";

import { TaxonomyType } from "@/data/types";


const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/heroes-section",
    name: "Hero's & Coffe",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV84dXFQNujgTd1Kx7sVn8t8n3HGNB1NsYTPGWvqRU0lWrdYaL6ULOhEB7yFH_9YzOfq-ezoFbIlaqEj_wzzGvgE4HJuNNoRVLETI9c-xkCp9vUW2PnLzoqL8FH_wf1y4XknH4MzM6-zo1ZIFRvR5PD1GUxfhfAfvT28tN4LaAZV4miE01NIedfJZP-Lu-etSdBXTc3UzXp6J8um36mjKPqWGqbjhf9DWTyNYOt2DheRGoHPIBwlUTrjDNtWr3GqnZcUq1bTi9qgFffDw5QcUzsxBZv54M6FOGCXtpigKll9r63muMGuZ_bDtUJQNHpMKXTJUhs8bqysr3rBqDfZ4Dh70CDVW8tvaPtS4S1ISdMWVQqak32smI6_U886sFqGIFP6AMurdMbfyBJCeW1LBh23eB72YfAELodgcHql2V7MkpX_5zl9ctgre-KLYpcaUmXU9xy3OqLpCZZz20pj2Xrz2IjyCIgvdfbaJORAdM5oluPoNWCPsIb_8DOiu0B1kTYbHvCTdqxKOMJWSCVCg-CB-XuYx_HZ963T8ToUQPFFmvliZuPO2hviDtbLC-c_L2brtrlVMMtoNYsy6k852AK-KGwOFCwUJxRhRhJ6bkBdiKmLiC_8QVVeYo9xRXNJr-JMoesJL06UBYTOltVoU9XqJEaiZPQkR-F14_f-uYxZzcBwhMgC2_jNj8Rrs3z-1PbTqseqBdk91dgrnVbw792VA9B5QUxdi7WsauVUPwrVlt9QeQnQ8ISoqwIPyjmc42jMqVzot5D3b1xrqOGJrqDSCrBME6ytEgN9sDKZSngmyzPK4VXnQ5mK08jP4rxmym-9cpXitWdTmpjqlR7GEY-ZcN3V-2SBFalQxkGYWeCEP7GO2__frbO7ue8vGZrJV_Kd3NwezVxW6j-YTfOXptKxGjD8=w1280-h853-s-no-gm?authuser=0',
  },
  {
    id: "2",
    href: "/Karting-section",
    name: "Karting",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV85W2WbzWADteIuxUoQJH2XOeqCNB9q52QYJEAtl7pNoC8_RINYZzLBdeure0Ka-yCHn1WkRGKjYJEFLR8FfJfhlBK0GyCdlRDIlvWHPYfm5NFyDqGiMEPNku2MvuGpxIpge3qrj24PPw0RR-O8brydHy2MnAo_IHz-EmxgCy9TA5RJWP_eViFbvUDVREAckiGZq3vn9XZp1_xF90HmDcnX6URuOq1X893TmKDi1jFKh1S2B2GYRXJXNaCrLHRA0vcW07LOl72pkBk0YpFjADNofE9uvru0d2gUvsvaBObl63urrmSAsCv7aJZuDaIkbUCn12YWlfU8nLvYtdms7OqNdlsIjMsm4oErgXR_w-ungj2UQcpoA-g8Y_zE1VFkaMG6wkeEYdJnQIsb0-j4yAfDrlZhtfRvIbjAERf1IzGmWRV7ztKUtWvshPhIRzIO_AQ9XLBlsxrbaiPmv9R3aBSurLc6xlzdb2Cpgk5EJefzBWmCQ4lxMsro6E6Vg7WZOZNFMVmJYbHzR_uBWSgplZ1nHOmknryJoWkvU9bH3O6EFU6EZtLGVgRTVo_DWdkUsfG7soMq1W0e1h0e_eRjB2wvre_9kVzePGtBSQ1m1V7nQIVMGlsSnDRzTM1A4tBs7j6vGMZLs9SwHyTk34jKtwpYEVYb6vLgLZCBPA9YXnRpRlh4MRHH8O0GSAxP1ocfxYwhIyQzUf90R2yIbgk724QV69Ot9BRCuconVYQXQzet4TyKW6-jZpBj2rsaZ9zlE7kE4yVTnbL_zkqrOQHm4lDZHKI9gvGW1Q5AZzQRSUkgvDSG9FaNix1WRGucAz93wI6lRQ8Vq8oY7DN7Uy6sBHp_sAXuc0kekDvMG5QiLZ1NeDfKQiAt6LS1uCeGEQikSHk3VT6jPmEljukS-6ksdpX-6npI=w944-h923-s-no-gm?authuser=0',
  },
  {
    id: "3",
    href: "/event-section",
    name: "Event",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV87P_bwyX8sATM6pDzDbtDFzcyb9G_kZjCrCGfLGT3vioAMAI69Njnbi3Yw-W83xuw71yAF1DL1Hl0FSlxsxkDoqOdAUlE92d1jgb4f98O-3vPbVKwsOEuAHzHkzB1xINu8yW7GWyftde5FunTyEk02lAxJWgLsGlKKXDVpOxx6b-5LaIvSQ9A57EUDDj7OWf0XnXHZdxGZsk3gg-oykkQEBAMtZp1_K5KXAB6brhFplXa0Dvr_lm69G0wXBrPpjkbx2BcTefQtLGzULM5tA350nVlpxW8DyQOF-__J3jagAIO5luf6ofuwylm04ltLXZ-LCpNj2uJwcAup-Lxeau5zbVJ_aZ_HynvZnmgwnCSyVEY9ZaPZnUnbe5AcsB39aveQ3qHDohkkFHxSP0fVkJIXBYyikJcATGBrprUAW2IPQghd8-b03Y2a7JAbLEvLgm96NSTKRdsQ6UyMPN_meXaD9oiXtfXIWVjcqcFeueQo2515x5ovcIyw1QOj9-haHKlsDy-7ddTPywa2R12bc4XI002-wI8zGWq3h8UP53lJGm524ca5h3FTr3iubA1azhzL1C4hOVnm57G7ovn8RWlE-oXaxg3nO-9qjLuc32fdh4T2fjWt7fcg1Ty4dCJOWWJtkm8j6TS-r5O8ZgLEpEwBOwIEQmPPQPkp9KItIIH0ozvQR9tbftE__qDruYCN9Cg-MbQNxZtYy1v3vVmdYQ4By9UFJE_guP38eSNjE-BW_zfgMmZiqGkkpK-ktQc2QFTy-nwmzTg6KAujRNDkCjQCUEplm4xqAWiEF4LLe_4dDPSoLegdAsPb6izJnNdAj1ZG9TyFpNF1U8F3HIOiFRxAZvG2tBD1YwarFxtW9BE0zkLzELkPvEevX0Pi_qzZ9b7f5MdSqOyEdQR-dMs7hs6xdcBU=w615-h923-s-no-gm?authuser=0',
  },
  {
    id: "4",
    href: "/disney-world",
    name: "Disney Resturant",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV86GyAsk6nqMbu0RkjFiQQq4oMhhb7Itfe0hdK5VHecGD1mxRY9Bl__D07XxPMe6vlwCSE1JuU8gVOnDbop3QwjFLY1R0P5Tn8lbfbGxXtQsWKWLw2xwlW-BY5Lf23YYjfdXnpIDDAycBrcwFD6n6lDvi0hihrUtv9YZUuaXHLCJ78yutn0OcZVn9yr0msJqeQaScFEd4xe31IKIqBDnihwjh9u4DfUxAO3AJ6FyEl7fuiPe2rk1J2wKAAhorocoRfcsmHifX1WWEahS3eO8yJTciiADjwQpuhdX1veFgCmVAb81IBtkcnR3RxRMj1hD1UjmljH_ALDWu_wvxpIRRaFqdOf-49cF8tAM-l0b60VRWyLxGuwoiu45Cuxr3P3tOyTxqfPMIhGMI62IPGQVMPLKCEH1GB1IxTI7QSa1r5ZMHsjB4LwGhV0ZJqWtJHUxApSH2RP2ViHyjTm7TffMhuglp_ilQzO6Z77RabcElT-uJrqn8C2a7BerdAwO36qywh3fNUO--d8F4K_oJEgqjE7WolOtEgF7OJBPk41p4quDhjQqHAqiPEKTtjDLwRmaZuBrZm4YKSoOGOJa6Uey1kGYfym_6L1fb7-3AlGA7O_zqAx-ldr60ECY0MwNJtHyaLq1SCmSS8clY9vdLWfYVNRBWAtNohp_duCj7ovCErDYTPlFw8o6QJTyccjgYRWSebF7J1Zr9ykLjVCMdxY2TEx45OLWhs2-KJY-RyxosoV2U5pOAwb6yOo9x1Au-Rs0HMpfmKUOVfpbVkWTgB1aYCOSx7ZTd1Yy_oYsluFkKeFF-IA6CT1xFHo4OcSEsgLNuBOWJgpsgwbjDmYcEG9JmVW-NpN4OrwVZx5RBAl6Fj9vMZ2ijW-3FIEJxcF2nw_UA8EenZ3WCdAnYlmlRMXz9uDeFPs=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "5",
    href: "/spaceplanet-section",
    name: "Space Planet",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV87Dv7R8VMJCytB--sSgw4jbuaWKw1BnefMp7z000nF9Mg1jKx0JS61mWlIfZd-I5Rbsv2_1ZHkriTpYS5Aqo1Ug_VPs883ThVV9BVUASTQb1PpMhmRqzNzc_h9O5KQH2sCUNkqsxzsb9hSpUhvhcJlQAg2G0wzx9zVESuo7AgkszSkSn3_7C7OcqUnMmeNttVrc-uPBeMke0DbU-H75I4VNdtjQwvVA7CpKztFvGBjPJCb3QNVU88mzaotsMb-A04ikrcAv3FgM5qC2eJDIcRBz_tc0Q9G7VtUVJS61DDuJhnuM8kE9zjXXlQq2o7Df69qw-GjZnMaA26AZSDz9h8DdNJ8kDY1O6AgDbCFqYVIRDRCdiOYto0gFWsUi--uzjf26j9aZ1AAKq4RC5o-K3fvCPDuXrd3K5IJyNS_ymFSxe-iCUsqevSeyxsStgYJ12Jh-I_gshnR0sFvVpRBNkquz4nS-P2crsAWu0Mf9a9tOui6cRzLAXkVqe6H0i3rlBp68ntDxz29Cr3dg0N4AYPJNxIAiMWuIzTIlddMb_s06zGQpZRPmVPLnZEoq5vac7A5xzjsFLNCSxg3iqt7m3DBnSQKsdtFcRJK_mgr7T3-FBdEYQjcMFWK-i0ckWxlDai9xp57-a6oaoXrGAjHwSc1ez7CxaF-_qn70enkJMKLMeHppLjKAqA7DzUrD1nLe2WUeW1tDT5QSHI4ZFhzjYyJkGpCJfgqu4RGAZGMtFZ8KR7SghFpRZxCpYB58pCTTd4-ciFWaV3yfojx7ri-Q8sRDA5tmm-2O6-u6C2XuDY_xQzlml1p9JaRLTTPMl_8VLI7XWxpBs2itlnsliMXMm27zLsV3ufmVI3yVr50DS-dgIFYiibe9GhFy6PUETORDVm2yT_rqzbA89jka6TAZrNYjLlI=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "6",
    href: "/idolland-section",
    name: "Idol Land",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV86fR907wks0RHPoHF51d0F_VMpwiuWtp-CEwBBsAF4XzkmZdMehHNS2uJolDBm3bnFBGiVBlemgxDxmBY56CePKhSFsVpedwYIxQ-WSBGWzL7RETFxmqlV-2cZuDp9jnOc_mO09qmI7i4e1LKF9-IGlsEZKpOeOLnGJgj_69RmWdddA0_8nntGL8h9zErQIpzywX3PnfomHRsDw00AOiT1qFnXV8fehrdh1dv-HhEc1w4ECBQh24A9gZg6lkTKEMy7ush0TjCoHsRDy2020CamaLfYwmB_FvwSw-FyeqtKB-9hqACo8wC-7_fM67i5_zIvICGICvwgt22DM8Uw49i84gj5O8WspWTzJg1rc2pUWFRt9kVU0VQfbCXDYqw67u6hZlL2sxynSyLsXY8qk5kfI2pGGZ7yNXV2URhd-dafafCh2fFlYV32ZntlE-xsWpOnkkl4rpJ_SbBZKluhH9Wk5y25HRKU0LU1kfXxNys9Bj3y7vq8pN_DuTWZxk4xPERg42m78NKMNzzrQ5RBsieKfsW5c-5x-Ry8qgVIyPUpEBWe4WzaiFRwm7MjQLYVuo9jRWpgdUWU-UfBCe-1RMiiq2c9eU6AH8TzyW7lLqIdgNKDSa0yD9vYQ6Knj2jjtcFp2mKAfHOYaMKR9dP-6zIqySMA-1vasycMbXRLZsR0Ss2pXxChmf3XYNAs5zNJyuJ86XdAAbkm3cs8DfUqeT4bmTQZ2F8dPzJp5d2x8M2o6RLbtIHmUWyrfxIOYdc6-fMs472JkJrErgXn2cS_Z-uu5FE0eajZWxIEtxJqWomoGipvXOz98E16IOYKZwYMBawluT45Paz85nMjiOFNQBu6sQSs1WBa5wtcgJV-8a1ngD_bzqfXb6I1120BErE6TDZbu14aEUOAutj_C0Ifw8qtj6pk=w1404-h923-s-no-gm?authuser=0',
  },
  {
    id: "7",
    href: "/bliards-section",
    name: "Bliards & Coffe",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV87Os6CbTiPRjGc_fwkMAjtFn5sYIusmIm4GzGxX4KnTOlgHj0v6iepKsrNpci6jooFoAfMiUo64_3MIDPSeK3vGqpjNN7pQu1oIRzB5jL1BRGtzLjLQpR_n8vuBTvFYTn16wj407uw-627VJg7tupScDKOFtnXnA4XSup87XFwcZyepkLCzb0WS_tPIG4vCvDU06O0uwPqA3uvFPNWkJdWQnnlz_xm3BfxzLm2ZVKz6YIk6GdjzYk1aBQQK_IR9DG61nZ0wfiXHjLfxodioZiVO3_-PoK-Sgy0MDDFuJgcvsSTCnEN2JbVOmZhP7xTVcqBqU3lkIg-fFCz85Ln9II29uqI9AoBjZR4BIASU1YzGoRpG8DjvqIs2j8ucfJDjBYdMuCle2c8aW1gRCvNOAv_LMrOs5lbRYVBcDi7zhMyUicpSiHQFeRI4EU5VjZ6g7B5trUWF--pTKKJYQtkkOifn3qPQCSqsd5qxeqHql5eejMLNt3M4UI_WJgc4RkV6UUqJYIMvh-rkb6BeoQQrk-pmX7vqRdAoUFUmZBfzCfEMHkQtqBtMvZVHF-hx9pMC80dTwxFx-R_TXF8SAZEQwu8RmjqgrCBQ7vx4lHd9YtGq9L8zyus3r6S7l1cnNkB4ATqQYusuXoQkQK869sOs55yOW5n9zyOzRciK3N2jqpIsVxYyyfl08g_1VdKxb70RKqO2kaLUtcGkNegNtYwbJqLnPzbttMESrUTrtBJW3kT8jbK2MX_bLBK-nmpkEUk016FqpZrSiPDm-HkHm-s5OBMByKDBbqeSXgd6FPj8ExuEGwUSnMHyjyDXaUpA0UuJksx5MsrKhaSKwrO35yJXmCk-HCC_6H_p3MhPRz26w3aAj52IRxE2hxcCF-CpV_1hyKx6_zn2K_t9hsAIvqDWBH_wlRk=w615-h923-s-no-gm?authuser=0',
  },
];

const POSTS = DEMO_POSTS;

const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />
      
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10" />
        {/* <div className=" relative">
        <SectionSliderNewCategories
              heading=""
              subHeading=""
          categoryCardType="card5"
          itemPerRow={1}
        />
        <div className="absolute mb-24 left-0 w-full h-full " style={{ top: '77%' }}>

          <SectionSliderNewCategories2
            categoryCardType="card5"
            itemPerRow={4}
          />
        </div>
        </div> */}

        <div className="relative py-16 mt-10">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>
        <div className="relative py-16 mt-10">
        <BackgroundSection />
        <SectionOurFeatures />
        </div>
      </div>
      
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">

      <SectionGridFeaturePlaces cardType="card2" />
      <SectionMagazine5 posts={MAGAZINE1_POSTS} />

     </div>

      <div className="container relative space-y-24 mb-24  lg:space-y-28 lg:mb-28">
        
        {/* <SectionGridFeaturePlaces cardType="card2" /> */}
        <SectionSliderNewCategories
          heading="Explore more sections"
          subHeading="Explore more than 10 sections"
          categoryCardType="card5"
          itemPerRow={4}
          categories={DEMO_CATS}
        />
 
      </div>
   
    </main>
  );
}

export default PageHome;
