import { Avatar, Badge, Button, Card, CardBody, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { AUTO, CENTER, COLUMN, FILL_PARENT, MEDIUM, ROW, SB, TRANSPARENT, YELLOW } from "../../../constants/typography";
import { getDaysBetweenDates } from "../../../scripts/helpers";

export default function QuestItem({data,name,tokens,description,task,sdate,edate}){

    return <Card bg={"#1A1D1F"} borderRadius={"16px"} padding={0} width={FILL_PARENT}>
        <CardBody padding={6}  w={FILL_PARENT}>
            <VStack w={FILL_PARENT}>
                <Flex alignItems={"flex-start"} direction={{base:COLUMN,sm:COLUMN,md:ROW,lg:ROW}} gap={12} w={FILL_PARENT}>
                <VStack alignItems={""}>
                <Avatar size='2xl' name={data.name} src={data.image} />  
                <Heading textAlign={CENTER} maxW={"120px"} m={AUTO}  isTruncated={true} size={MEDIUM}>{data.name}</Heading>

                </VStack>

                <Text textAlign={"left"}>{description}</Text>
                </Flex>
                <Flex w={FILL_PARENT} justify={SB} alignItems={CENTER}>
                    <HStack><Badge colorScheme={YELLOW} fontSize={"15px"} bg={TRANSPARENT}>{tokens} xp</Badge>
                    <Text color="#AEB1B3" fontSize={"11px"}>To Everyone</Text>
                    </HStack>
                    <Button bg={TRANSPARENT} _hover={{bg:TRANSPARENT}} _active={{bg:TRANSPARENT}}>{task.split("|").length} Tasks</Button>


                </Flex>

            </VStack>
        </CardBody>

    </Card>
}