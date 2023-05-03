import { Badge, Button, Card, CardBody, Flex, Heading, HStack, Image, Text, transition, VStack } from "@chakra-ui/react";
import { getDaysBetweenDates, todayDate } from "../../../scripts/helpers";
import {IoMdStopwatch} from "react-icons/io"
import { FILL_PARENT, POINTER, SB, SMALL, TRANSPARENT, YELLOW } from "../../../constants/typography";
import {TbClick} from "react-icons/tb"
import { useNavigate } from "react-router-dom";
import low from "../../images/cardlow.png";
export default function QuestCard({cname,cimage,sdate,edate,name,tokens,task,_id,sub}){

    let nav = useNavigate()


    return <Card borderRadius={"16px"} _hover={{transform:"scale(1.02)"}} cursor={POINTER} bg={"#111315"} onClick={()=>{
        nav(`/Quest/${_id}`)

    }}>
        <CardBody padding={2}>
            <VStack>
                <Flex w={FILL_PARENT} justifyContent={SB} alignItems={"center"}>
                    <Button _hover={{bg:TRANSPARENT}} _active={{bg:TRANSPARENT}} bg={TRANSPARENT} fontSize={"11px"} leftIcon={<Image borderRadius={"100px"} w={"20px"} h={"20px"} src={cimage}></Image>}>{cname}</Button>
                    <Button color={"#34D399"} _hover={{bg:TRANSPARENT}} _active={{bg:TRANSPARENT}} bg={TRANSPARENT} fontSize={"11px"} leftIcon={<IoMdStopwatch color="#34D399" />}>{getDaysBetweenDates(String(todayDate()),edate)} days left</Button>

                </Flex>

                <Flex padding={"0px 14px"} w={FILL_PARENT} justifyContent={"flex-start"}>
                    <Heading  size={SMALL} >{name}</Heading>
                </Flex>

                <Flex gap={"16px"} w={FILL_PARENT} justifyContent={"start"} padding={"14px"}>
                    <Image width={"74px"} height={"74px"} borderRadius={"12px"} src={cimage}></Image>
                    <VStack alignItems={"flex-start"}>
                        <Text fontSize={"16px"} fontWeight={"500"}>{sub}</Text>
                        <Badge  color={YELLOW} borderRadius={"50px"}>{tokens} xp</Badge>
                    </VStack>
                </Flex>
                <Flex w={FILL_PARENT} justifyContent={"space-between"} >
                <VStack alignItems={"flex-start"}>
                <Image width={"100px"} marginLeft={"1.2rem"} src={low}></Image>
                    </VStack>
                    <Button leftIcon={<TbClick />} fontSize={"12px"} bg={TRANSPARENT} _hover={{bg:TRANSPARENT}} _active={{bg:TRANSPARENT}}>0/{task.split("|").length} tasks</Button>
                </Flex>
            </VStack>
        </CardBody>
    </Card>
}