import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/http/api"
import { useRef } from "react"
import { Link,useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import {  LoaderCircle } from 'lucide-react';

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();


  // Mutations
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log("Login Successful");
      navigate('/dashboard/home');
    },
  })
  const handleLoginSubmit = () => {
  const email = emailRef.current?.value;
  const password = passwordRef.current?.value;
  console.log("data", {email, password});
  
  if (!email || !password) {
    return alert("Please Enter email and password")
  }

  mutation.mutate({email, password});

}




  return (
    <section className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
          {mutation.isPending && <div>Loading.....</div>}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input ref={emailRef} id="email" type="email" placeholder="Email" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input ref={passwordRef} id="password" type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full ">
            <Button onClick={handleLoginSubmit} className="w-full" disabled={mutation.isPending}>{mutation.isPending&& <LoaderCircle size={32} strokeWidth={1} className="animate-spin"/>}<span className="ml-2">Sign in</span></Button>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to={'/auth/register'} className="underline">
            Sign Up
          </Link>
        </div>
        </div>
     
      </CardFooter>
    </Card>
    </section>
    
  )
}

export default LoginPage