"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Label } from "../ui/label"

type ProfileFormInputs = z.infer<typeof profileSchema>

const profileSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(1, "Address is required"),
    currentPassword: z.string().optional(),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>({
    resolver: zodResolver(profileSchema),
  })

  const onSubmit = (data: ProfileFormInputs) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>First Name</Label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <Label>Last Name</Label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <Label>Email</Label>
        <input {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <Label>Address</Label>
        <input {...register("address")} />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div>
        <Label>Current Password</Label>
        <input type='password' {...register("currentPassword")} />
      </div>
      <div>
        <Label>New Password</Label>
        <input type='password' {...register("newPassword")} />
        {errors.newPassword && <p>{errors.newPassword.message}</p>}
      </div>
      <div>
        <Label>Confirm New Password</Label>
        <input type='password' {...register("confirmPassword")} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type='submit'>Save Changes</button>
      <button type='button'>Cancel</button>
    </form>
  )
}

export default ProfileForm
