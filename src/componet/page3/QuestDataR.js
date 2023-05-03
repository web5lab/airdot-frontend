import React, { useState } from 'react'
import "./QuestDataR.css"
import { AiOutlineAliyun } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { Box, Button, Flex, HStack,Image} from '@chakra-ui/react';
import { AUTO, FILL_30PARENT, FILL_40PARENT, FILL_PARENT,TRANSPARENT,SB } from '../../constants/typography';
import {IoMdStopwatch,IoIosStar} from "react-icons/io"
import {TbClick} from "react-icons/tb"
import low from "../images/cardlow.png";


function QuestDataR(props) {
    const [qbtn,setQbtn] = useState(true)
const [pbtn,setPbtn] = useState(false)
    return (
        <Box   className="right"  width={{base:FILL_PARENT,sm:FILL_PARENT,lg:FILL_40PARENT}} >
            <div className='QuestMaindiv' >
                <Button style={{backgroundColor:qbtn?"#272B30":"#1A1D1F"}}  onClick={()=>{
                    setQbtn((prev)=>!prev)
                    setPbtn((prev)=>!prev)

                }}>Quest</Button>
                <Button style={{backgroundColor:pbtn?"#272B30":"#1A1D1F"}}  onClick={()=>{
                    setPbtn((prev)=>!prev)
                    setQbtn((prev)=>!prev)


                }}>Project info</Button>
            </div>

            

            <Box className='condiv'  width={{base:FILL_PARENT,sm:FILL_PARENT,lg:FILL_PARENT}}>
            <Flex w={FILL_PARENT} justifyContent={SB} alignItems={"center"}>
                    <Button color={"#34D399"} _hover={{bg:TRANSPARENT}} _active={{bg:TRANSPARENT}} bg={TRANSPARENT} fontSize={"11px"} leftIcon={<IoMdStopwatch color="#34D399" />}>7 days left</Button>
                    <Button color={"#34D399"} _hover={{bg:TRANSPARENT}} _active={{bg:TRANSPARENT}} bg={TRANSPARENT} fontSize={"11px"} leftIcon={<IoIosStar color="#34D399" />}>Eligible</Button>

                </Flex>

                <Flex alignItems={"flex-start"} ><h3>{props.pname}</h3></Flex>
                <HStack alignItems={"center"} className='kdiv'>
                    <p>By</p>
                    <img src={props.imgsrc} className='smallimg' alt="" />
                    <h5>{props.name}</h5>
                </HStack>
                <div className='paradiv'>
                    <p>
                        {props.para1}
                        
                    </p>
                    <p>
                        {props.para2}

                    </p>
                </div>
                <div className='tagdiv'>
                    <h6>raffle</h6>
                    <h6>USDC</h6>
                </div>
                <div className='taskdiv'>
                    <p style={{display:"flex"
                        ,flexDirection:"row",justifyContent:"space-evenly",
                        alignItems:"center",
                        gap:"0.5rem"
                         
                        }}><AiOutlineAliyun/>Perpetual + Raffle</p>
                    <p style={{display:"flex"
                        ,flexDirection:"row",justifyContent:"space-evenly",
                        width:"4rem",
                        alignItems:"center"
                        }}>{<TbClick />}{props.task} tasks</p>
                </div>
                <div className='lastflex1'>
                <Image width={"150px"}  padding={"1rem"} src={low}></Image>

                </div>

                <div className='xpdiv'>
                    <h3>{props.xppoints} XP <p>To Everyone </p> </h3>
                    <h4>100 USDC <p>To 10 Lucky Winners </p></h4>
                    

                </div>
                <div className='imgsmallingdvi'>
                    <img src={props.imgsrc2} alt="" />
                    <h4>Cryptocity NFT</h4>
                    <h6>To Everyone</h6>
                    <p>WALL covers the minting gas fees</p>
                </div>



            </Box>

        </Box>
    )
}

export default QuestDataR