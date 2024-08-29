import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccountFormSchema from "@/schemas/accountForm_zod";

export function AccountFormLayout() {
  const form = useForm<z.infer<typeof AccountFormSchema>>({
    resolver: zodResolver(AccountFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AccountFormSchema>) => {
    const formValues = { ...values };
    console.log(formValues);
  };
  return (
    <Tabs defaultValue="ChangePassword" className="max-w-[400px]">
      <TabsList className="grid w-full rounded-3xl grid-cols-2">
        <TabsTrigger className="rounded-3xl" value="ChangePassword">
          Change Password
        </TabsTrigger>
        <TabsTrigger className="rounded-3xl" value="ChangePin">
          Change Pin
        </TabsTrigger>
      </TabsList>
      <TabsContent value="ChangePassword" className="border p-5 rounded-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Password</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-3xl"
                      placeholder="Enter Current Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-3xl"
                      placeholder="Enter New Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Password</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-3xl"
                      placeholder="Confirm New Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <Button
                className="bg-blue-400 w-full h-[44px] rounded-3xl px-4 gap-2"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="ChangePin" className="border p-5 rounded-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="currentPin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Pin</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-3xl"
                      placeholder="Enter Current Pin"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Pin</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-3xl"
                      placeholder="Enter New Pin"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmNewPin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm New Pin</FormLabel>
                  <FormControl>
                    <Input
                      className="h-10 rounded-3xl"
                      placeholder="Confirm New Pin"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <Button
                className="bg-blue-400 w-full h-[44px] rounded-3xl px-4 gap-2"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );
}
