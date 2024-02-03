"use client";

import React, { FC, useEffect, useState } from "react";
import { TaxonomyType } from "@/data/types";
import CardCategory3 from "@/components/CardCategory3";
import CardCategory4 from "@/components/CardCategory4";
import CardCategory5 from "@/components/CardCategory5";
import Heading from "@/shared/Heading";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";

import station3 from "@/images/sections/heroIntry.jpg";
import station5 from "@/images/sections/5.jpg";
import station6 from "@/images/sections/6.jpg";
import station7 from "@/images/sections/7.jpg";
import carting from "@/images/sections/carting.jpg";
import MKH_5493 from "@/images/sections/MKH_5493.jpg";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?: "card3" | "card4" | "card5";
  itemPerRow?: 1| 4 | 5;
  sliderStyle?: "style1" | "style2";
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV85-BOwvM2vu-cPDNVE-GveRumAtOWbST6QtpN1u0FDyUNpMhMiumM8c8M8J4eEDfDbNbTtAd8PNqZwCMV2P68ktzpetj4-BQrc6D-TKD_fQHzuGkekfyYiZLrwqXrIAXA16EajFsY34ICLkB0A4zUDIn9epQBL36SmUnFuBS_sMjwaIF0ZievjRz1Xnp9xYxxwUVaFsB5DQry8XP3ip7Wx8tHGyx7G3LYWmPOh9zJc4oh_TZd295Na-JEzvl7BqESJxjD0gTNU9JmEPU8E_fN_HJIlPMBM0e60ATWBFqWmlB3PwjYENv3IMxO85aOPuf9dpPAtOmqyF4rbLps5s0H8-fQJqAyo_N9DL2lMedTrbn4ejdX8svm4SWFy6_9yH6LzYPUwCMAHaLY1fx6rJswdiVq3msTCRqleOBCnl4hfMnH6yjWCjNkUS1uM2kK0FH9BQbPsLyX6uf7lnPZoSo-hNO4ZkiMmgvYPQ1iKO4wXKtn5RpzDL7dZx74H67bqF1eDvAhYsZu4fI3h-FHw8zZs1Gr6bRfMexUx4Q63s_v5fwNfkZJd3kTAeL1Dh_HW0xWjRHpX9joM2nofi7O2cN_aO2YNlMl_S6LIbx8uGP9QdtfnrbZCufKPwEbn4Z3m2Sim53Vt4klQoAzehA685pIAwKzxVG1lko7Ist-GngyKAc1qmqRKSMKzC00oFYuafHL_DCG90NyT0GZvXY18ZcGgtMtImUVTEha60lbgAL5QSMUXh5GeqVB41wAJ0mjNI9uIKugNuYGI0nf6bYUrJPxBbpOPDHkjAdF4fZqxa3X4_Z_lnTYL5ndy3XMXBLkllQzIL8tJnZYM9aj-WPWJoI3ljCe5NuDtzY2CQTNVjs-q6Q1QwwtwSNM3ZjAwlajSn40O8HuJlhEq2F4eiGq4JRK-ykak=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV86L4RLzGg31ZSJ-OkwIr5HFugRws8EYzu3__rGb9dnVqaAsb5OXlEQ0wuIC8VDs-dyeqhAtrw8PFaHww2PV0gXV-PXGHb5nYxV3WpdRNuHexZfh7q6xa6kZWtCNrHuOalXf2v5w1aH41jHLSgidd3nqm9MX2SpJPdVuhAPLVc6Eh0Ms5fLeH4Vdk5EBII6hkAh8CxNYus5-002abIUq17r_42r-eER7sQHxRvu_U4rxQpaNhoiaUGuCiAVO9Gbb-6Rkor6T1nWWbLT_s-OZJ8aX5GZuEM_Zk8ylD2HL67v95LQTbH-5Y1wy_x7Nbv-ZgAPDO9eD4nrf187YmTwPGKUAmpGllU6eROXeLjigMP3X3-E_ocfOUuo5pgcBOkOpzHCvV7-0aIzAGsFbTd7QUzgtaB_EUpLHA61XtvBPUWWh0a9phC634e0a9O3GRZTnhqL2-IGZ-k5JBefQbxkvdH53q0yISc9_G1_k_VcU1jFWRaqp3pVJOYcPjWXLbvRwsbbD1Wf6gRXPsN6QsI6csizD9PB-ba_gQzCSQVdLXgTE5gTrfwLuwdjwCD49g8cpDC5g3ZXKiGpjTW8_g11ZhhrqVgqRIHcm9C3TiPSkDYIZc3Wg8IEBzCFi9iYPFUMUhyReMzam65Ik_jR3qc9pI-5OYX_2J97b9VITDinSwRMihjQcdbfJbnGf9wcjFhVnVl3YCFlbShZK99754ePLCjPWKnPaqGMCCjotIAcwoc-VNnZjHyX1OLqHwQ5TrGEODCUoWi6faq9F9D0TYZ0YfMFKPgGoVpLU-iFxVLm8z7W1V5vLqGNbckoOAmdBAz2Rj_yILj7XQTOLY3gJ1VIzIlcGz3-GO2xzhe9M61gcqtADN8tZogmkY2fVkq5vs5w1LdjRo59q3akzMjZLHU53P8lFwik=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV84WjuSCoLuS5_iSVHuLAYRmIhFBUHu_PCQXIxA9T6wBAJoPG1yU47EEs12TQzsgKTfKX5fUdU6DvSr0Y8dtlz8ZpbjYfdVExbGzJwmuDe9teu1Hl1O8GpXgYsRZz4mceKaHCWrNB7ppmkHQJknmR4mqH0dxAdFAu3vj2iJh14ExD4Er84QkXFoYewn_HimtC32k1O7FEB_GYpHtUOJACHtB2HV3IuldwMIf8KDnyf3a3O-TrI_xO_liOicJopkD6Z7i3XDIOtC-RBIL6RQjRcK8epRZSBY568KI6su47NDGkNM6b10UH4GqQ-X_A_b87WHwSVnE856ev9ZvO0tySpyGdBN4Fkr8i39a1yqS9NjtyeMCr0YVnq8UaMOrFvW4FeVw3nBiu1MdyypIRhu60PIaeBTSwXP8LcbItJoMARIqsqyhu40PJywNGutMARVLXmL_Px0wK55CwSzPvZfIeiUWqgiJbASJHueeVzJlERs3xsVwenWUgT_EMWlJb3RCMsiWOobooKtEMs_eZi1DJwFKCX0w3CM840GF130cgc0sc-FIyhZ_1p7CCxf-sQ3HMnckrK9R_ohIp4mzYXYwQpF_Nrk13BFP9VHrwUrPypSY_63pf8HuOaKvtAkAhojk2MOH1foRbLPF8rFLn0d_TnvwIWogHrSPtd-q_dj1dvljbbKc7ZAC0_FVtKdlwOL1U-sYlDEI6N6wN4bvP-LJy3Nuz4WhrZ9AjnDsOy9VI3hwggl6mAiFwu-HE4BLWYE2QoWwXf9OcBFCGFM4tfBQe0zT-rr1NdrmEplmP9pNqbXm8QG4SDzv_G5vuroa7s4-2-nbpUE08MZCfDTx8MaoFzkfCRD88BdU1ykXpebGAAMfTqVMSRtTR300_eQxwpJ5ulyTRSTtlw-uzLyb4wSdImUy3tY=w1280-h853-s-no-gm?authuser=0',
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV87VVUSAaALizni0T1j59kA7jn4826Vo-Frfk6-26Xhiqb1dpLSnt88KUzzUjZnjp7hcQkwxA6ooHlq-TtJKUUaWkCapCxIdD62JG3Lf8-Fg_cNbDm348A81VDJz3XdlHYjBOUdi5zcAuvPXfEwmQxnbRXAkhw59bs7IJOCBNyrHCTzcNW6WZxnBapNbrCpCE8kWUFeu9kbml4iDEUCscoxkPI-dkl5thwguKJn0k-FVCPYsjrXw3rJ24Jxl5tL1GrOFpWMXHYtQbFsB6YquYbIfIzg1FGdF_F5nsCe3CFp_Vmwr5Pi215GCJwYXSfZLjgJhEEdSRVrjbJgHiJEov9M7OCiD_E4RTqz8ZNYMpr-PmYN62YDImSEkoVbCj6sFiGQ32LzgqT4NJ3gnwZO5OszDFW7ch1U0EzxjbeLHwZvt25pdnZgqeSw1KAaLfOvUDKrA6D975uxiFHAdvOJ2TTO0m7ibTagY9e862NJyfRwbGWj9Y2h3ZUfrCKAboO75n9aMjxlvdCyfd87hBLiGZkoRRM39iujkH7zJ5HbdBcd3ViSg7MLjOJESzyFVllcprvCkT3X2QxbQAys-NXe6P4NxigXufJBBscrvi4q-1-8B5D_EEP6TdD0LPTLP1geuJsebq7z7rIDQA9dUBOx-w1xEVqz422Yt3_C6T15tkvdGG0_ir5OeUA_shBrTt9D0Yp8GdtG2hm6I4YoYxNTMFGnGloIzu8xV1bWbpVwoOn-TX8Z6XoaQjRx98UQZJzxBkh8fsNwv9soqvEBZdlzBcV4WAmf9YKPZA1STNgwSkK92fkyloEiGE5PSpCl_ZpjavL-qUSVGJXRX9QgXPmxAsFaF46-rrSnSXeurezzmPdcKhkVwwc2ZK11OlbZTBCjN9fkyfMOhPBdWO025BpexRMdY_kc=w1441-h923-s-no-gm?authuser=0',
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV84WjuSCoLuS5_iSVHuLAYRmIhFBUHu_PCQXIxA9T6wBAJoPG1yU47EEs12TQzsgKTfKX5fUdU6DvSr0Y8dtlz8ZpbjYfdVExbGzJwmuDe9teu1Hl1O8GpXgYsRZz4mceKaHCWrNB7ppmkHQJknmR4mqH0dxAdFAu3vj2iJh14ExD4Er84QkXFoYewn_HimtC32k1O7FEB_GYpHtUOJACHtB2HV3IuldwMIf8KDnyf3a3O-TrI_xO_liOicJopkD6Z7i3XDIOtC-RBIL6RQjRcK8epRZSBY568KI6su47NDGkNM6b10UH4GqQ-X_A_b87WHwSVnE856ev9ZvO0tySpyGdBN4Fkr8i39a1yqS9NjtyeMCr0YVnq8UaMOrFvW4FeVw3nBiu1MdyypIRhu60PIaeBTSwXP8LcbItJoMARIqsqyhu40PJywNGutMARVLXmL_Px0wK55CwSzPvZfIeiUWqgiJbASJHueeVzJlERs3xsVwenWUgT_EMWlJb3RCMsiWOobooKtEMs_eZi1DJwFKCX0w3CM840GF130cgc0sc-FIyhZ_1p7CCxf-sQ3HMnckrK9R_ohIp4mzYXYwQpF_Nrk13BFP9VHrwUrPypSY_63pf8HuOaKvtAkAhojk2MOH1foRbLPF8rFLn0d_TnvwIWogHrSPtd-q_dj1dvljbbKc7ZAC0_FVtKdlwOL1U-sYlDEI6N6wN4bvP-LJy3Nuz4WhrZ9AjnDsOy9VI3hwggl6mAiFwu-HE4BLWYE2QoWwXf9OcBFCGFM4tfBQe0zT-rr1NdrmEplmP9pNqbXm8QG4SDzv_G5vuroa7s4-2-nbpUE08MZCfDTx8MaoFzkfCRD88BdU1ykXpebGAAMfTqVMSRtTR300_eQxwpJ5ulyTRSTtlw-uzLyb4wSdImUy3tY=w1280-h853-s-no-gm?authuser=0',
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV86CRHog4UUlCWgbwJS8mZnHsp4mvKEx-B4n3ZyeTG81GH4jVSQ_ubKQKOSr9Rn_zhdYuEB2S6yg_rqcfinE0EpVlyQXwE0xE9Inzz4dt_VrzC_9YAFSbPk-LhoF_wtcedVZIp1dsgvDPjPp7pMe20z3OWmyHiDUSOiMk9HmQD7aDy1BqPayaiPsKlQ8zl-QCm0smIOE8KnowU9qLTOAV12dmRqAynCV9-524BQI2Cz3nNFCx-DlNgZ5M4V77LADHk_A4ecQ3vqSXupAJrWXO7LiKWONJ5CKrizodNC2c7G372B5daG9k_X9NCabkqX1uYO-UZWQkkC8ASkVImmtipAJpFJi2gfaCh4rscTLSg7HvRw0G9WFK7jfdA0DIakt_WoXSbTpCWe0JudCy2dPwc2bJYkyxaGqfxZy2hs-5ukkgKBnxEiAQsoptIVbcH9wDJv0z9VVc46fhWiPu_LwXFJHAgj13Qu4ORxEQ4U6CwVY8CpMuUm2_SWjmEBhNhPvqByMTd6Oa4CsY3NcKTKeMPJTXTqFVDtac-SM_57QSnwzlSI-IOuzQtkcrgugAC5lHd3ZekCToJ1oRV1Yj7tItCd7wskQ_zHHbLnfTCIrQdJgw34XalGoHjyD4OKPXyFMOjTIFFRjh3kHG_j9nj5jezoSUlQnDB66axmyOrhe68IfidcLuiBAIEk6-kRu2oLToBl7oaDeIaIJ5kFwYQKzNEM6YvvduyKFGV2B4f5lfrSycxnDe78hzpmy7-RFCY4d4tB3VIKndjwpHAwFpsCx0UywzIkAghJ3zaH2go3mMlW5yzeYYa9JjNnBuB0Y40XEDaDwfsaOgUciV0wGUBMXTCu0seNVIUb8HfHDHACtvHiGLwK3JTcT8-VgjuY6n8882HLFQ98jY43AMDa11T7-hRiFK6g=w1640-h923-s-no-gm?authuser=0',
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail: 'https://lh3.googleusercontent.com/pw/ABLVV87mBbL3wuTpdZFuGqqzCVSOhMbiUWllvt4dyj9D3X_BthV9r--VM23oThEt5zVeokAEEvsnR1XjLstIHGlejoccJcAfHW8qfrTY-qH3HNw-b_WrvWOGc8swOxlUC3Brsfvb5bALyXb1laKgk-QUbyVQgUrECL_PufVVGNXpWsl-OfB7TqREo2KXeD8JoFKMEaFcy98_IYmSS4RkYVwuN5q4ScIud4oMcxRLYZrZVCaMJKqukCYAf7-138Ktml0MErT82ntxmTIIJStCg_3CMGS1y5V0Fa7x9-N3AdNe0qx2GsPZjx5iMRKKctslhJCPH1e2DzUPOkfjh-KqCUMda5SOfQitlF8KEHTfdmJFXRpvHlWgtEVHwUg5Of5YAseF74bgXr6-eSu3u5gKxqxdt2UY1KDu7f7W45ZTY4F__IWAMdsEdIseZAnAzmHNNAenUz2miENm_46RqbWdcz7Hvnxq-qOUKyEhDtShBTyWr_9YI5N0BFJGlFXYX0l_5Jnoiv6zFKgqdMb2TD9KWDQAvL3FM-vgatLyHxmd4Q6kGyeBbJqaIcjdzdTDVxKWRvYqovldFheHOKk39kheznIi5MEDxZ7llDMA-8KB2dWaKH1GkXmzwZsFA25XcP4095zyT7mDQO9bZcRIgjj96jm8HlibpUoRbpaWd8ufgIlTq2Xe_ivZ-yh-Vu1FPhamUYRWm4AjzAYO5eQ2-4pT68GdAFvp1SCtNUnvTOrM1utdoH4nTfFKWyp6s0hqisD5NkIXc8vheNxmn_A4Az7mLx3Qe3-fa6TCb2qnSoIzjAoYEZ7IzkL9Z9jI4BpcuxdcNc_84SVwcG65vjoLwypoNvWxTLfQcEugTO5w14IsFj_7-UXCx66Il-MCYMMSHhvFYmrKNXVU2pQhcAF43960eBl7OFe9_sg=w1384-h923-s-no-gm?authuser=0',
  },
  {
    id: "8",
    href: "/listing-stay-map",
    name: "",
    taxonomy: "category",
    thumbnail:'https://lh3.googleusercontent.com/pw/ABLVV84ZdXtmi1kpLXBI8SGwiSRHSIliFkUOvrLAfZyhZ65dOxw2g2xK_R_kYV7rv5V3WbkrvqEEUDikiseNHrRG8mFLk1Pkz0aCkFDL6P_1Che1Kf8WDfUEQ3c5yAPjXRjO8-tztdllr7JvZdW3TtccMUOnD5W0IHdfGLKXpIqi2tZp39eq0S-wRnJ2J9HDAEbeeh7JhbO6vUXMDIFtFqsqZFuTxxw7oxKDZc6p-_ckQGfBBN0OuvLQhg4bht1ZPVisaWPglISClovtsBd1qkivlyp9IrtenK1lySoegV8nA1DQ6YVdO-QR5N6Kjrez1aiPMi3EUNFYZehPCmXaCplugV-En1nyNYVZI1W9WJHkeDa-b126jqSjAktnBdDtnu3KQ_JBaQ1EeNgc0e747kvIeMXC3Fy-ECoh2xpgkl7PLazi0KbikQxh0iMF0BUtG0cLB878uJ31KqUa8pDmt2Of8EjBchWHxDI5actDh0u6JeAC7XSXul7_IV42BXZsLn8H9KJ_EqAEXXFDc7p_OZQgIpaHV1RBIlr0bmIAbBImfiXaX4OkVCvwrhJR7iuv31W29wYBLX6J24-EWv5qo8nbTb4tiBpfkGjIXb31ckeLOrWno-noWKlg0Ykt-4F53FJQYkzMmNAyJHpQ71psEe8oo-cTB3Nds45JJ2-uGSLdVdgNeclEjPGjZKnVOP0Wmym0XsTSOsDnKe7iInn7GhdPdKWSOKEm7MQBEnASpco-jogCznkeflp3oCsHGvBFqQch52ydOKcV66a9udNZpu_nIKvToRXzXGanY4NhLFT5Jsn629Yq13F8r_guhK9dZq4LCLJ2ha4VjoFgFPU7h0jk-lscOUXd3VlVgJwQ5ALhXD_qaAU9Mbn2YoZAYDQIg6gkzxL8tiKmA6OA7FANGBysWmK6qk0=w1640-h923-s-no-gm?authuser=0',
  },
];

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Sections for discovery",
  subHeading = "Popular Sections to recommends for you",
  className = "",
  itemClassName = "",
  categories = DEMO_CATS,
  itemPerRow = 5,
  categoryCardType = "card3",
  sliderStyle = "style1",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numberOfItems, setNumberOfitem] = useState(0);

  const windowWidth = useWindowSize().width;
  useEffect(() => {
    if (windowWidth < 320) {
      return setNumberOfitem(1);
    }
    if (windowWidth < 500) {
      return setNumberOfitem(itemPerRow - 3);
    }
    if (windowWidth < 1024) {
      return setNumberOfitem(itemPerRow - 2);
    }
    if (windowWidth < 1280) {
      return setNumberOfitem(itemPerRow - 1);
    }

    setNumberOfitem(itemPerRow);
  }, [itemPerRow, windowWidth]);

  function changeItemId(newVal: number) {
    if (newVal > currentIndex) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurrentIndex(newVal);
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < categories?.length - 1) {
        changeItemId(currentIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        changeItemId(currentIndex - 1);
      }
    },
    trackMouse: true,
  });

  const renderCard = (item: TaxonomyType) => {
    switch (categoryCardType) {
      case "card3":
        return <CardCategory3 taxonomy={item} />;
      case "card4":
        return <CardCategory4 taxonomy={item} />;
      case "card5":
        return <CardCategory5 taxonomy={item} />;
      default:
        return <CardCategory3 taxonomy={item} />;
    }
  };

  if (!numberOfItems) return null;

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <Heading desc={subHeading} isCenter={true}>
        {heading}
      </Heading>
      <MotionConfig
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className={`relative flow-root`} {...handlers}>
          <div className={`flow-root overflow-hidden rounded-xl`}>
            <motion.ul
              initial={false}
              className="relative whitespace-nowrap -mx-2 xl:-mx-4"
            >
              <AnimatePresence initial={false} custom={direction}>
                {categories.map((item, indx) => (
                  <motion.li
                    className={`relative inline-block px-2 xl:px-4 ${itemClassName}`}
                    custom={direction}
                    initial={{
                      x: `${(currentIndex - 1) * -100}%`,
                    }}
                    animate={{
                      x: `${currentIndex * -100}%`,
                    }}
                    variants={variants(200, 1)}
                    key={indx}
                    style={{
                      width: `calc(1/${numberOfItems} * 100%)`,
                    }}
                  >
                    {renderCard(item)}
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>

          {currentIndex ? (
            <PrevBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex - 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -left-3 xl:-left-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}

          {categories.length > currentIndex + numberOfItems ? (
            <NextBtn
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => changeItemId(currentIndex + 1)}
              className="w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -right-3 xl:-right-6 top-1/3 -translate-y-1/2 z-[1]"
            />
          ) : null}
        </div>
      </MotionConfig>
    </div>
  );
};

export default SectionSliderNewCategories;
