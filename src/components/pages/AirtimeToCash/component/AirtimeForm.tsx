import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AirtimeFormSchema from "@/schemas/AirtimeForm_zod";
import Progress from "@/assets/icons/Airtime/progress.png";

export function AirtimeForm() {
  const form = useForm<z.infer<typeof AirtimeFormSchema>>({
    resolver: zodResolver(AirtimeFormSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof AirtimeFormSchema>) => {
    const formValues = { ...values };
    console.log(formValues);
  };
  return (
    <div className="w-full lg:px-32">
      <div className="max-w-full mb-10">
        <img className="mx-auto" src={Progress} alt="" />
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-center mb-3">Airtime to Cash</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="items-center grid grid-rows-1 lg:grid-rows-none lg:grid-cols-2 gap-4">
                  <div className="grid gap-2 mt-1">
                    <Label className="pb-1" htmlFor="framework">
                      Select Network
                    </Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper" className="">
                        <SelectItem value="mtn">MTN NG</SelectItem>
                        <SelectItem value="etisalat">Etisalat</SelectItem>
                        <SelectItem value="airtel">Airtel</SelectItem>
                        <SelectItem value="glo">Glo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="Enter Phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            id="amount"
                            type="number"
                            placeholder="Enter Amount"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enter Pin</FormLabel>
                        <FormControl>
                          <Input
                            id="pin"
                            type="number"
                            placeholder="Enter pin"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full mt-5">
                  <Button
                    className="bg-primary w-full h-[44px] rounded px-4 gap-2"
                    type="submit"
                  >
                    Send message
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
