import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import HomePic from "@/assets/images/Home/Home.png";
import Back from "@/assets/icons/Back.svg";
import GoogleLogo from "@/assets/icons/googleLogo.png";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import LoginFormSchema from "@/schemas/loginForm_zod";

export function Home() {
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="w-full lg:flex h-screen overflow-hidden lg:flex-row ">
        <div className="hidden bg-muted lg:block">
          <img
            src={HomePic}
            alt="Image"
            className=" h-full w-[500px] dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <div className="w-full lg:p-5 pt-5 h-full bg-[#F7F9FD]">
          <div className="flex justify-between mx-5 lg:mx-10 ">
            <div className="flex gap-x-2 items-center">
              <img src={Back} width={7.7} height={13.4} alt={""} />
              <p className="font-medium text-base">Back</p>
            </div>
            <Button>Sign Up</Button>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex w-full items-center justify-center py-12">
                <div className="mx-auto grid w-[450px] my-auto gap-6">
                  <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <Button variant="outline" className="w-full rounded-xl">
                      <div className="flex gap-x-2 items-center">
                        <img src={GoogleLogo} alt="" className="w-4 h-4" />
                        <span>Login with Google</span>
                      </div>
                    </Button>
                  </div>
                  <p className="text-balance w-full text-muted-foreground">
                    <div className="grid gap-x-1 grid-cols-3 items-center">
                      <Separator orientation="horizontal" />
                      <span className="w-full text-center text-xs">
                        Or continue with
                      </span>
                      <Separator orientation="horizontal" />
                    </div>
                  </p>
                  <div className="grid gap-4 bg-white p-10 rounded-2xl">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="wabdotmail@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input placeholder="Gabon4351" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-between items-center">
                      <div className="flex gap-x-2 items-center">
                        <Switch />
                        <span className="text-sm">Remember me</span>
                      </div>
                      <a
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm"
                      >
                        Recover Password
                      </a>
                    </div>
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
